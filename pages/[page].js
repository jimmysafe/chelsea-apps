import Slice from '../components/Slice';
import Seo from '../components/Seo';
import { getPages, getSinglePage } from '../prismic/queries';

export default function Page({ page, err }) {
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


export async function getStaticPaths() {
    const data = await getPages()
    const paths = data.map(page => ({
        params: { page: page.uid }
    }))
    return {
      paths,
      fallback: false
    };
  }


export async function getStaticProps({ params, preview = null, previewData = {} }) {
    const page = await getSinglePage(params.page, previewData)
    return {
      props: {
        page,
        preview
      }
    }
  }
