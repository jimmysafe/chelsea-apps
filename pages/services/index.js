import { getSinglePage } from "../../prismic/queries"
import Slice from '../../components/Slice'

const ServicesPage = (props) => {
  const { preview, page } = props
  console.log(props)
  return (
    <div style={{ paddingTop: '120px' }}>
      {page.data.body.map((slice, i) => (
        <Slice key={i} slice={slice} page={page}/>
      ))}
    </div>
  )
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const page = await getSinglePage('services', previewData)
  return {
    props: {
      page,
      preview
    }
  }
}

export default ServicesPage