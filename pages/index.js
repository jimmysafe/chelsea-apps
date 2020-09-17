import { getSinglePage } from "../prismic/queries"
import Slice from '../components/Slice'

const Home = (props) => {
  const page = props.page
  return (
    <div style={{ paddingTop: '120px' }}>
      {page.data.body.map((slice, i) => (
        <Slice key={i} slice={slice} page={page}/>
      ))}
    </div>
  )
}


export async function getServerSideProps({ preview = null, previewData = {} }) {

  const page = await getSinglePage('homepage', previewData)
  return {
    props: {
      page,
      preview
    }
  }
}


export default Home

