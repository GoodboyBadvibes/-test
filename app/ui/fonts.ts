import {Inter} from 'next/font/google';
import { Lusitana } from 'next/font/google';   

export const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const lusitanaFont = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});