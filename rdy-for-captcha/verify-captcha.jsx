// import { useEffect } from "react";
// import Head from "next/head";
//
// const SITE_KEY = process.env.NEXT_PUBLIC_YA_CAPTCHA_SITE_KEY;
//
// export default function VerifyCaptcha() {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://smartcaptcha.yandexcloud.net/captcha.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);
//
//   useEffect(() => {
//     window.smartCaptchaCallback = async (token) => {
//       try {
//         const res = await fetch("/api/validate-captcha", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ token }),
//         });
//         const result = await res.json();
//         if (result.ok) window.location.href = "/";
//         else alert("Проверка не пройдена");
//       } catch (err) {
//         alert("Ошибка сети");
//       }
//     };
//   }, []);
//
//   return (
//     <>
//       <Head>
//         <title>Подтверждение</title>
//       </Head>
//       <main className="min-h-screen bg-black text-white flex items-center justify-center">
//         {SITE_KEY ? (
//           <div
//             className="smart-captcha"
//             data-sitekey={SITE_KEY}
//             data-callback="smartCaptchaCallback"
//           ></div>
//         ) : (
//           <p className="text-red-500 text-center">⚠️ Ключ SITE_KEY не найден</p>
//         )}
//       </main>
//     </>
//   );
// }