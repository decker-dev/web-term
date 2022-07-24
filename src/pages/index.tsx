import React, { useState } from 'react';
import Container from '@/components/Container/container.styles';
interface PageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}
export const App: React.FC<PageProps> = ({ inputRef }) => {
  const [history, setHistory] = useState<Array<string>>(['Welcome to the CLI']);

  const HandleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.code === '13') {
      setHistory([...history, e.currentTarget.value]);
      if (e.currentTarget.value == 'clear') {
        setHistory([]);
      }
      e.currentTarget.value = '';
    }
  };

  return (
    <Container>
      {history.map((value, index) => (
        <>
          <p>decker@decker:$ ~ </p>
          <div key={index}>{value}</div>
        </>
      ))}
      <p>decker@decker:$ ~ </p>
      <input onKeyDown={HandleKeyUp} autoFocus ref={inputRef} />
    </Container>
  );
};

export default App;
