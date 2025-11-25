import localFont from 'next/font/local';

export const lexend = localFont({
  src: [
    {
      path: '../../../public/fonts/lexend-latin-400-normal.woff',
      weight: '400', // 👈 set font weight here
      style: 'normal', // 👈 set style (normal/italic)
    },
    {
      path: '../../../public/fonts/lexend-latin-500-normal.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/lexend-latin-700-normal.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/lexend-latin-900-normal.woff',
      weight: '900', // 👈 set font weight here
      style: 'normal', // 👈 set style (normal/italic)
    },
  ],
  variable: '--font-lexend',
});
