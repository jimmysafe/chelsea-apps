import PostBottomNavigation from '../../components/common/PostBottomNavigation';
import Slice from '../../components/Slice';
import { getSinglePost, nextLink, prevLink } from "../../prismic/queries"
import { checkIsNotFound } from '../../utils';

const Post = ({ page, next, prev }) => {
    return (
        <div className="page-content post-page">
            {page.data.body.map((slice, i) => (
                <Slice key={i} slice={slice} page={page}/>
            ))}
          <PostBottomNavigation prev={prev} next={next} />
        </div>
    )
}

export async function getServerSideProps({ res, params, preview = null, previewData = {} }) {
    const page = await getSinglePost(params.post, previewData)
    checkIsNotFound(page, res)
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
