import { getSinglePage } from "../prismic/queries"
import Slice from '../components/Slice'
import { checkIsNotFound } from "../utils"

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


export async function getServerSideProps({ res, preview = null, previewData = {} }) {
  const page = await getSinglePage('homepage', previewData)
  checkIsNotFound(page, res)
  return {
    props: {
      page,
      preview
    }
  }
}


export default Home

