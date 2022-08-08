import Image from 'next/image';
import { LinksContainer } from '@/components';

export const links = () => {
  return (
    <LinksContainer>
      <div className="row">
        <div className="column">
          <h1>Decker Urbano</h1>
          <p>
            Desarrollador de software que disfruta creando soluciones a problemas únicos. Trabajo principalmente con
            React y TypeScript para proporcionar soluciones limpias y eficientes para crear mejores productos de
            software.
          </p>
          <a
            className="button button-linked"
            href="https://www.linkedin.com/in/decker-urbano/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src="/images/icons/linkedin.svg" alt="LinkedIn Logo" />
            LinkedIn
          </a>
          <br />
          <a
            className="button button-github"
            href="https://github.com/decker-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src="/images/icons/github.svg" alt="github Logo" />
            GitHub
          </a>
          <br />

          <a
            className="button button-twit"
            href="https://twitter.com/0xDecker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src="/images/icons/twitter.svg" alt="Twitter Logo" />
            Twitter
          </a>
          <br />
          <a
            className="button button-yt"
            href="https://www.youtube.com/channel/UCYdYbGc_ru4G0WWSBaNMq2Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src="/images/icons/youtube.svg" alt="YouTube Logo" />
            YouTube
          </a>
          <br />

          <a
            className="button button-discord"
            href="https://discordapp.com/users/299006260756611072"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src="/images/icons/discord.svg" alt="Discord Logo" />
            Discord
          </a>
          <br />

          <a
            className="button button-default"
            href="mailto:deckerurbano@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src="/images/icons/email.svg" alt="Email Icon" />
            Mail
          </a>
        </div>
      </div>
    </LinksContainer>
  );
};
export default links;
