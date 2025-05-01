import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div className="bg-[#0d0d0d] text-white"><Component {...pageProps} /></div>
}