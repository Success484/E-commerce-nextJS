import Header from './components/Header'
// import HeaderMain from './components/HeaderMain'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
// import Footer from './components/Footer'
import MobNavbar from './components/MobNavbar'
import ItemsFooter from './components/ItemsFooter'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wares',
  description: 'About fashion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navbar />
        {/* <HeaderMain /> */}
      <MobNavbar />
        {children}
        {/* <Footer /> */}
        < ItemsFooter />
        </body>
    </html>
  )
}
