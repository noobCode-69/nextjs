import '@/styles/globals.css'
import Navbar from '../../components/Navbar'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })



export default function App({ Component, pageProps }) {
  return <div className={inter.className}>
    <Navbar/>
    <Component {...pageProps} />
  </div>
  
}
