import React, { useState } from 'react';
import Container from '@/components/Container/container.styles';
import { commands } from '../utils/commands';
import Command from '@/types/Command';
interface PageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
  children?: JSX.Element | JSX.Element[];
}

export const App: React.FC<PageProps> = ({ inputRef }) => {
  const [command, setCommand] = useState<Array<Command>>([]);

  const HandleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.code === '13') {
      setCommand([...command, commands(e.currentTarget.value)]);
      if (e.currentTarget.value === 'clear') {
        setCommand([]);
      }
      e.currentTarget.value = '';
    }
  };

  return (
    <Container>
      {command.map((command: Command, index: number) => (
        <>
          <p>decker@decker:$ ~ </p>
          <p key={index}>{command.name}</p>
          <div></div>
          <p>{command.description}</p>
        </>
      ))}
      {command[command.length - 1]?.action && command[command.length - 1].action()}
      <p>decker@decker:$ ~ </p>
      <input onKeyDown={HandleKeyUp} autoFocus ref={inputRef} />
    </Container>
  );
};

export default App;
