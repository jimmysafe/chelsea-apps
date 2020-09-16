import { getSinglePage } from "../prismic/queries"
import Slice from '../components/Slice'

const Home = ({ page }) => {
  return (
    <div style={{ paddingTop: '120px' }}>
      {page.data.body.map((slice, i) => (
        <Slice key={i} slice={slice} page={page}/>
      ))}
    </div>
  )
}


Home.getInitialProps = async() => {
  const page = await getSinglePage('homepage')
  return { page }
}

export default Home