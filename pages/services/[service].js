import Slice from '../../components/Slice';
import { getSingleService } from '../../prismic/queries';

export default function Service({ page, err }) {
    return (
        <div className="page-content">
            {page.data.body.map((slice, i) => (
                <Slice key={i} slice={slice} page={page}/>
            ))}
        </div>
    )
}

export async function getServerSideProps({ params, preview = null, previewData = {} }) {
    const page = await getSingleService(params.service, previewData)
    return {
      props: {
        page,
        preview
      }
    }
  }