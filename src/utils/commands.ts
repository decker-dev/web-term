import Command from '@/types/Command';

export const commands = (value: string, param?: string): Command => {
  const command = {
    linkedin: {
      name: 'linkedin',
      description: 'Open linkedin profile',
      action: () => {
        window.open(`https://www.linkedin.com/in/decker-urbano/`);
      },
    },
    github: {
      name: 'github',
      description: 'Open github profile',
      action: () => {
        window.open(`https://github.com/decker-dev`);
      },
    },
    ls: {
      name: 'ls',
      description: 'passwords.csv Crypto wallet Photos',
    },
    about: {
      name: 'about',
      description:
        'Desarrollador de software que disfruta creando soluciones a problemas únicos. Trabajo principalmente con React y TypeScript para proporcionar soluciones limpias y eficientes para crear mejores productos de software.',
    },
    date: {
      name: 'date',
      description: Date().toString(),
    },
    email: {
      name: 'email',
      description: 'Open email',
      action: () => {
        window.open(`mailto:deckerurbano@gmail`);
      },
    },
    echo: {
      name: 'echo',
      description: param,
    },
    google: {
      name: 'google',
      description: 'Search google',
      action: () => {
        window.open(`https://google.com/search?q=${param}`);
      },
    },
    help: {
      name: 'help',
      description:
        'linkedin<br/>' +
        'github <br/>' +
        ' ls <br/>' +
        'about <br/>' +
        'date <br/>' +
        'email <br/>' +
        'echo <br/>' +
        'google <br/>' +
        'help',
    },
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return command[value] ?? { name: value, description: `Comando ${value} invalido` };
};
