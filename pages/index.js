import { getHomePage } from "../prismic/queries"
import Slice from '../components/Slice'

const Home = ({ page }) => {
  console.log(page)
  return (
    <div style={{ paddingTop: '120px' }}>
      {page.data.body.map((slice, i) => (
        <Slice key={i} slice={slice} page={page}/>
      ))}
    </div>
  )
}


Home.getInitialProps = async() => {
  const page = await getHomePage()
  return { page }
}

export default Home