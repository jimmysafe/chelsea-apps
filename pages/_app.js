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


  export async function getServerSideProps({ Component, ctx }) {
    let pageProps
    if (Component.getServerSideProps) {
      pageProps = await Component.getServerSideProps(ctx)
    } 
    return {
      pageProps
    }
  }

  
  export default MyApp