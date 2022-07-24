import { KeyboardEventHandler, MutableRefObject, FC } from 'react';

export interface InputProps {
  HandleKeyUp: KeyboardEventHandler;
  inputRef: MutableRefObject<HTMLInputElement>;
}
export const Input: FC<InputProps> = ({ HandleKeyUp, inputRef }) => {
  return (
    <>
      <p>decker@decker:$ ~ </p>
      <input onKeyDown={HandleKeyUp} autoFocus ref={inputRef} />
    </>
  );
};
export default Input;
