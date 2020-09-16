import { getSinglePage } from "../../prismic/queries"
import Slice from '../../components/Slice'

const ServicesPage = ({ page }) => {
  return (
    <div style={{ paddingTop: '120px' }}>
      {page.data.body.map((slice, i) => (
        <Slice key={i} slice={slice} page={page}/>
      ))}
    </div>
  )
}


ServicesPage.getInitialProps = async() => {
  const page = await getSinglePage("services")
  return { page }
}

export default ServicesPage