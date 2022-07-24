import React, { useState } from 'react';
import Container from '@/components/Container/container.styles';
import { commands } from '../utils/commands';
import Command from '@/types/Command';
import { Input } from '@/components/index';
interface PageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
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
    <div className="bg">
      <Container>
        <>
          {command.map((command: Command, index: number) => (
            <>
              <p>decker@decker:$ ~ </p>
              <p key={index}>{command.name}</p>
              <div></div>
              <p>{command.description}</p>
            </>
          ))}
          {command[command.length - 1]?.action && command[command.length - 1].action()}
          <Input HandleKeyUp={HandleKeyUp} inputRef={inputRef} />
        </>
      </Container>
    </div>
  );
};

export default App;
