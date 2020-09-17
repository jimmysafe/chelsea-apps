import PostBottomNavigation from '../../components/common/PostBottomNavigation';
import Slice from '../../components/Slice';
// import Seo from '../components/Seo';
import { getSinglePost, nextLink, prevLink } from "../../prismic/queries"

const Post = ({ page, next, prev }) => {
    return (
        <>
        {/* <Seo page={page} /> */}
        <div className="page-content">
            {page.data.body.map((slice, i) => (
                <Slice key={i} slice={slice} page={page}/>
            ))}
        <PostBottomNavigation prev={prev} next={next} />
        </div>
        </>
    )
}

export async function getServerSideProps({ params, preview = null, previewData = {} }) {
    const page = await getSinglePost(params.post, previewData)
    const next = await nextLink('post', page.id)
    const prev = await prevLink('post', page.id)
    return {
      props: {
        page,
        next,
        prev,
        preview
      }
    }
  }

export default Post
