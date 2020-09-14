import { Client } from '../prismic/prismic-configuration'
import Slice from '../components/Slice';
import Seo from '../components/Seo';

export default function Page({ page, err }) {
    console.log(page)
    return (
        <>
        <p>page</p>
        {/* <Seo page={page} />
        <div className="page-content">
            {page.data.body.map((slice, i) => (
                <Slice key={i} slice={slice} page={page}/>
            ))}
        </div> */}
        </>
    )
}

Page.getInitialProps = async({ query }) => {
    try {
        const page = await Client().getByUID("page", query.page)
        return { page }
    } catch(err) {
        return { err }
    }
}