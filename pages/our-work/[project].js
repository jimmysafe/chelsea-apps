import NextProject from '../../components/common/NextProject';
import Slice from '../../components/Slice';
// import Seo from '../components/Seo';
import { getSingleProject, nextLink } from '../../prismic/queries';

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

Project.getInitialProps = async({ query }) => {
    try {
        const page = await getSingleProject(query.project)
        const next = await nextLink('project', page.id)
        return { page, next }
    } catch(err) {
        return { err }
    }
}