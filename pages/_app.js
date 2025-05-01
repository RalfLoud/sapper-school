import '../styles/globals.css'
export const metadata = {
  title: "Мой сайт",
  description: "Описание сайта",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function App({ Component, pageProps }) {
  return <div className="bg-[#0d0d0d] text-white"><Component {...pageProps} /></div>
}