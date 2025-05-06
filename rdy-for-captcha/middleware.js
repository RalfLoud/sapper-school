// import { NextResponse } from 'next/server';
//
// export function middleware(request) {
//   const { pathname } = request.nextUrl;
//
//   // Исключаем запросы к статическим ресурсам
//   if (
//     pathname.startsWith('/_next/') ||
//     pathname.startsWith('/api/') ||
//     pathname.startsWith('/favicon.ico') ||
//     pathname.startsWith('/robots.txt') ||
//     pathname.startsWith('/sitemap.xml') ||
//     pathname.startsWith('/fonts/') ||
//     pathname.startsWith('/images/') ||
//     pathname.startsWith('/icons/') ||
//     pathname === '/verify-captcha'
//   ) {
//     return NextResponse.next();
//   }
//
//   const token = request.cookies.get('captcha_passed');
//
//   if (!token) {
//     const url = request.nextUrl.clone();
//     url.pathname = '/verify-captcha';
//     return NextResponse.redirect(url);
//   }
//
//   return NextResponse.next();
// }
//
// export const config = {
//   matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|fonts|images|icons).*)'],
// };