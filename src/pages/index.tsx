import React, { useState } from 'react';
import { commands } from '@/utils/commands';
import Command from '@/types/Command';
import { Input, Container } from '@/components/index';
import ReactHTMLParser from 'react-html-parser';
import Head from 'next/head';
interface PageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

export const App: React.FC<PageProps> = ({ inputRef }) => {
  const [command, setCommand] = useState<Array<Command>>([
    {
      name: '',
      description: `
    Desarrollador de software que disfruta creando soluciones a problemas únicos. Trabajo principalmente con React y TypeScript para proporcionar soluciones limpias y eficientes para crear mejores productos de software.<br>
    Ingrese 'help' para ver la lista de comandos disponibles<br>
    Haga click <a href='http://localhost:3000/links'>aca</a> para ver una version simplificada`,
    },
  ]);

  const HandleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.split(' ');
    if (e.key === 'Enter' || e.code === '13') {
      setCommand([...command, commands(value[0], value[1])]);
      if (e.currentTarget.value === 'clear') {
        setCommand([]);
      }
      e.currentTarget.value = '';
    }
  };

  return (
    <>
      <div className="bg">
        <Container>
          <>
            {command.map((command: Command, index: number) => (
              <>
                <p>decker@decker:$ ~ </p>
                <p key={index}>{command.name}</p>
                <div className="response">
                  <p>{ReactHTMLParser(command.description)}</p>
                </div>
              </>
            ))}
            {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              command[command.length - 1]?.action && command[command.length - 1].action()
            }
            <Input HandleKeyUp={HandleKeyUp} inputRef={inputRef} />
          </>
        </Container>
      </div>
    </>
  );
};

export default App;
