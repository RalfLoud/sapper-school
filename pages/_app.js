import '../styles/globals.css'
export const metadata = {
  title: "Мой сайт",
  description: "Описание сайта",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function App({ Component, pageProps }) {
  return <div className="bg-noise text-white"><Component {...pageProps} /></div>
}