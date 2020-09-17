import NextProject from '../../components/common/NextProject';
import Slice from '../../components/Slice';
// import Seo from '../components/Seo';
import { getProjects, getSingleProject, nextLink } from '../../prismic/queries';

export default function Project({ page, err, next }) {
    return (
        <>
        {/* <Seo page={page} /> */}
        <div className="page-content">
            {page.data.body.map((slice, i) => (
                <Slice key={i} slice={slice} page={page}/>
            ))}
            {next.length > 0 &&
                <NextProject page={page} nextLink={next[0].uid}/>
            }
        </div>
        </>
    )
}



export async function getStaticPaths() {
    const data = await getProjects()
    const paths = data.map(project => ({
        params: { project: project.uid }
    }))
    return {
      paths,
      fallback: false
    };
  }


export async function getStaticProps({ params, preview = null, previewData = {} }) {
    const page = await getSingleProject(params.project, previewData)
    const next = await nextLink('project', page.id)
    return {
      props: {
        page,
        next,
        preview
      }
    }
  }
