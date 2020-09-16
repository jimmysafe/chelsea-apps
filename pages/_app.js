import 'bootstrap/dist/css/bootstrap.css';
import '../styles/typography.css'
import '../styles/hamburger.css'
import '../styles/main.css'
import Head from 'next/head'
import { useEffect } from 'react'
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {

    useEffect(() => {
      window.prismic = { endpoint: 'https://chelseaapps.cdn.prismic.io/api/v2' }
    }, [])

    return (
      <>
      <Head>
        <script type="text/javascript" src="https://static.cdn.prismic.io/prismic.min.js?new=true"></script>
      </Head>
        <Layout {...pageProps}>
            <Component {...pageProps} />
        </Layout>
      </>
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