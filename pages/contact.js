import { getSinglePage } from '../prismic/queries'
import Slice from '../components/Slice'
import ContactForm from '../components/common/ContactForm'
import { checkIsNotFound } from '../utils'

const Contact = ({ page }) => {
    return (
        <div className="page-content">
            {page.data.body.map((slice, i) => (
                <Slice key={i} slice={slice} page={page}/>
            ))}
            <ContactForm />
        </div>
    )
}

export async function getServerSideProps({ res, preview = null, previewData = {} }) {

    const page = await getSinglePage('contact', previewData)
    checkIsNotFound(page, res)
    return {
      props: {
        page,
        preview
      }
    }
  }

export default Contact
