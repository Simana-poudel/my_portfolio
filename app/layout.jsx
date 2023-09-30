import Navigation from '@components/Navigation'
import '@styles/globals.css'
import { AOSInit } from './aos'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'], 
  weight: '400',
})


export const metadata = {
  title: 'SimanaPoudel',
  description: 'This is portfolio of simana poudel, full stack developer.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <AOSInit />
      <body  className={poppins.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
