
import Head from 'next/head'

const Seo = ({ page }) => {
    const { meta_title, meta_description } = page.data
    return (
        <Head>
            <title>{meta_title && meta_title[0] ? meta_title[0].text : 'Chelsea Apps'} | Chelsea Apps</title>
            <meta name="description" content={meta_description && meta_description[0] ? meta_description[0].text : 'Chelsea Apps'}/>
        </Head>
    )
}

export default Seo