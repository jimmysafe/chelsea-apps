import Slice from '../../components/Slice';
// import Seo from '../components/Seo';
import { getSingleService } from '../../prismic/queries';

export default function Service({ page, err }) {
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

Service.getInitialProps = async({ query }) => {
    try {
        const page = await getSingleService(query.service)
        return { page }
    } catch(err) {
        return { err }
    }
}