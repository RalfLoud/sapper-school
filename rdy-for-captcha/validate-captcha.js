// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }
//
//   const { token } = req.body;
//   const secret = process.env.YA_CAPTCHA_SECRET_KEY;
//
//   if (!token || !secret) {
//     return res.status(400).json({ message: 'Missing token or secret' });
//   }
//
//   try {
//     const params = new URLSearchParams();
//     params.append('secret', secret);
//     params.append('token', token);
//     // IP можно добавить, если нужно: params.append('ip', req.headers['x-forwarded-for'] || req.socket.remoteAddress);
//
//     const yaRes = await fetch('https://smartcaptcha.yandexcloud.net/validate', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       body: params.toString(),
//     });
//
//     const yaData = await yaRes.json();
//
//     if (yaData.status === 'ok') {
//       res.setHeader(
//         'Set-Cookie',
//         `captcha_passed=1; Path=/; Max-Age=3600; HttpOnly; SameSite=Lax`
//       );
//       return res.status(200).json({ success: true });
//     } else {
//       return res.status(403).json({ success: false, message: 'Invalid captcha' });
//     }
//   } catch (error) {
//     console.error('Ошибка при валидации капчи:', error);
//     return res.status(500).json({ message: 'Captcha validation error' });
//   }
// }