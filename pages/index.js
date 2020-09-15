import Offices from "../components/common/Offices"
import { getHomePage } from "../prismic/queries"

const Home = ({ page }) => {
  console.log(page)
  return (
    <div style={{ paddingTop: '120px' }}>
      <Offices />
    </div>
  )
}


Home.getInitialProps = async() => {
  const page = await getHomePage()
  return { page }
}

export default Home