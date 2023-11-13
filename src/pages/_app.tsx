/* eslint-disable import/order */
import '@/styles/globals.css';
import '@/styles/custom.css';
import '@/styles/variables.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
