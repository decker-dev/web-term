import Command from '../types/Command';

export const commands = (value: string): Command => {
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
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return command[value] ?? { name: value, description: `Comando ${value} invalido` };
};
