import React, { useState } from 'react';

export const App = () => {
  const [history, setHistory] = useState<Array<string>>([]);

  const HandleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.code === '13') {
      setHistory([...history, e.currentTarget.value]);
      e.currentTarget.value = '';
    }
  };

  return (
    <>
      {history.map((command, index) => (
        <div key={index}>{command}</div>
      ))}
      <p>Decker@decker</p>
      <input onKeyDown={HandleKeyUp} autoFocus />
    </>
  );
};

export default App;
