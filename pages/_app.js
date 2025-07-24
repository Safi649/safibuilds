// pages/_app.js
import '@/styles/globals.css' // this path may change based on your folder structure

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
