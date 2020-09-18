import Slice from '../../components/Slice';
import { getSingleService } from '../../prismic/queries';
import { checkIsNotFound } from '../../utils';

export default function Service({ page, err }) {
    return (
        <div className="page-content">
            {page.data.body.map((slice, i) => (
                <Slice key={i} slice={slice} page={page}/>
            ))}
        </div>
    )
}

export async function getServerSideProps({ res, params, preview = null, previewData = {} }) {
    const page = await getSingleService(params.service, previewData)
    checkIsNotFound(page, res)
    return {
      props: {
        page,
        preview
      }
    }
  }