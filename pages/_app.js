// pages/_app.js

import '../styles/globals.css'; // TailwindCSS global styles
import { Toaster } from 'react-hot-toast'; // Toast notifications

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Global Toasts */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Load current page */}
      <Component {...pageProps} />
    </>
  );
}
