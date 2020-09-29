import Slice from '../components/Slice';
import { getSinglePage, getPostsUrl } from '../prismic/queries';
import { checkIsNotFound } from '../utils';

export default function Page({ page, err }) {
    return (
        <div className="page-content">
            {page.data.body.map((slice, i) => (
                <Slice key={i} slice={slice} page={page}/>
            ))}
        </div>
    )
}

export async function getServerSideProps({ res, params, preview = null, previewData = {} }) {
    const page = await getSinglePage(params.page, previewData)
    
    // Needed for migration from wordpress where posts are /post instead of /blog/post
    const postsUrl = await getPostsUrl()
    if(postsUrl.includes(params.page)){
        res.writeHead(302, {
            Location: `/blog/${params.page}`
        });
        res.end();
        return
    }
    
    checkIsNotFound(page, res)
    return {
      props: {
        page,
        preview
      }
    }
  }
