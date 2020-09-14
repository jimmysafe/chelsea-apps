import 'bootstrap/dist/css/bootstrap.css';
import '../styles/typography.css'
import '../styles/hamburger.css'
import '../styles/main.css'

import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {

    return (
        <Layout {...pageProps}>
            <Component {...pageProps} />
        </Layout>
    )
  }


MyApp.getInitialProps = async({ Component, ctx }) => {

    let pageProps
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    } 

    return {
        pageProps
    }
}


  
  export default MyApp