import Slice from '../components/Slice';
import { getSinglePage, getSinglePost, nextLink, prevLink } from '../prismic/queries';
import { checkIsNotFound } from '../utils';
import PostBottomNavigation from '../components/common/PostBottomNavigation'

export default function Page({ page, err, prev, next }) {
    return (
        <div className="page-content">
            {page.data.body.map((slice, i) => (
                <Slice key={i} slice={slice} page={page}/>
            ))}
            {page.type === "post" && 
                <PostBottomNavigation prev={prev} next={next} />
            }
        </div>
    )
}

export async function getServerSideProps({ res, params, preview = null, previewData = {} }) {
    let page
    const queriedPage = await getSinglePage(params.page, previewData)

    if(!queriedPage){
        const queriedPost = await getSinglePost(params.page, previewData)
        page = queriedPost
    } else {
        page = queriedPage
    }

    const next = await nextLink('post', page.id)
    const prev = await prevLink('post', page.id)
    
    
    checkIsNotFound(page, res)
    
    return {
      props: {
        page,
        next,
        prev,
        preview
      }
    }
  }
