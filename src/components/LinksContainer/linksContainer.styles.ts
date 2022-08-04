import styled from 'styled-components';

const linksContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  text-align: center;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  .column {
    position: center;
    width: 100%;
    float: center;
    box-sizing: border-box;
  }

  /* For devices larger than 400px */
  @media (min-width: 400px) {
    .container {
      width: 85%;
      padding: 0;
    }
  }

  /* For devices larger than 550px */
  @media (min-width: 550px) {
    .container {
      width: 80%;
    }
    .column,
    .columns {
      margin-left: 0;
    }
    .column:first-child,
    .columns:first-child {
      margin-left: 0;
    }
  }

  h1 {
    margin-top: 0;
    margin-bottom: 16px;
    font-weight: 800;
    font-size: 24px;
    line-height: 64px;
    letter-spacing: 0;
  }

  /* Larger than phablet */
  @media (min-width: 550px) {
    h1 {
      font-size: 48px;
      line-height: 96px;
    }
  }

  p {
    margin-top: 0;
  }

  /* Links
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  a {
    color: #0085ff;
  }
  a:hover {
    color: #0085ff;
  }

  /* Code
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  code {
    padding: 0.2rem 0.5rem;
    margin: 0 0.2rem;
    font-size: 90%;
    white-space: nowrap;
    background: #f1f1f1;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
  }
  pre > code {
    display: block;
    padding: 1rem 1.5rem;
    white-space: pre;
  }

  /* Spacing
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  button,
  .button {
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select,
  fieldset {
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 2.5rem;
  }

  /* Utilities
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  .u-full-width {
    width: 100%;
    box-sizing: border-box;
  }
  .u-max-full-width {
    max-width: 100%;
    box-sizing: border-box;
  }
  .u-pull-right {
    float: right;
  }
  .u-pull-left {
    float: left;
  }

  /* Misc
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  hr {
    margin-top: 3rem;
    margin-bottom: 3.5rem;
    border-width: 0;
    border-top: 1px solid #e1e1e1;
  }

  .button,
  button {
    display: inline-block;
    text-decoration: none;
    height: 48px;
    text-align: center;
    vertical-align: middle;
    font-size: 18px;
    width: 300px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0.1px;
    white-space: wrap;
    border-radius: 8px;
    cursor: pointer;
  }
  button:hover,
  .button:focus {
    color: #333;
    border-color: #888;
    outline: 0;
  }
  .button.button-primary {
    color: #fff;
    filter: brightness(90%);
  }
  .button.button-primary:hover,
  .button.button-primary:focus {
    color: #fff;
    filter: brightness(90%);
  }

  /* Brand Icons
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

  .icon {
    padding: 0px 8px 3.5px 0px;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }

  /* Brand Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

  /* Default (this is great for your own brand color!) */
  .button.button-default {
    color: #ffffff;
    background-color: #0085ff;
  }
  .button.button-default:hover,
  .button.button-default:focus {
    filter: brightness(90%);
  }

  /* Discord */
  .button.button-discord {
    color: #ffffff;
    background-color: #5865f2;
  }
  .button.button-discord:hover,
  .button.button-discord:focus {
    filter: brightness(90%);
  }

  /* Github */
  .button.button-github {
    color: #ffffff;
    background-color: #000000;
  }
  .button.button-github:hover,
  .button.button-github:focus {
    filter: brightness(90%);
  }

  /* LinkedIn */
  .button.button-linked {
    color: #ffffff;
    background-color: #2867b2;
  }
  .button.button-linked:hover,
  .button.button-linked:focus {
    filter: brightness(90%);
  }

  /* Twitch */
  .button.button-twitch {
    color: #ffffff;
    background-color: #9146ff;
  }
  .button.button-twitch:hover,
  .button.button-twitch:focus {
    filter: brightness(90%);
  }

  /* Twitter */
  .button.button-twit {
    color: #ffffff;
    background-color: #1da1f2;
  }
  .button.button-twit:hover,
  .button.button-twit:focus {
    filter: brightness(90%);
  }

  /* YouTube */
  .button.button-yt {
    color: #ffffff;
    background-color: #ff0100;
  }
  .button.button-yt:hover,
  .button.button-yt:focus {
    filter: brightness(90%);
  }
`;
export default linksContainer;
