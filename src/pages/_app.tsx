import '@/styles/global.css';
import type { AppProps } from 'next/app';
import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    inputRef.current?.focus();
  };
  return (
    <div onClick={onClickAnywhere} className="bg">
      <Component {...pageProps} inputRef={inputRef} />
    </div>
  );
}
