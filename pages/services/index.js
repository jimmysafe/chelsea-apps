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


ServicesPage.getInitialProps = async({ preview = null, previewData = {} }) => {

    const { ref } = previewData

    const page = await getSinglePage('services', ref)
    return { page, preview }
}

export default ServicesPage