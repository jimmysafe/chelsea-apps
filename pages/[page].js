import Slice from '../components/Slice';
import Seo from '../components/Seo';
import { getSinglePage } from '../prismic/queries';

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

Page.getInitialProps = async({ query, res }) => {
    try {
        const page = await getSinglePage(query.page)
        return { page }
    } catch(err) {
        return { err }
    }
}