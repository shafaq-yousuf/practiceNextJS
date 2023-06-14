import MyNavbar from '@/components/MyNavbar'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'


export default function App({ Component, pageProps }) {
  return <><MyNavbar/>
  <Component {...pageProps} />
  </>
  
}
