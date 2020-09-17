import Slice from '../../components/Slice';
// import Seo from '../components/Seo';
import { getSinglePost } from "../../prismic/queries"

const Post = ({ page }) => {
    return (
        <>
        {/* <Seo page={page} /> */}
        <div className="page-content">
            {page.data.body.map((slice, i) => (
                <Slice key={i} slice={slice} page={page}/>
            ))}
        </div>
        </>
    )
}

export async function getServerSideProps({ params, preview = null, previewData = {} }) {
    const page = await getSinglePost(params.post, previewData)
    // const next = await nextLink('project', page.id)
    return {
      props: {
        page,
        preview
      }
    }
  }

export default Post
