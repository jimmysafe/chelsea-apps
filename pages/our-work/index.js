import { getProjects, getSinglePage } from "../../prismic/queries"
import Head from 'next/head'
import Link from 'next/link'

const WorkPage = ({ projects }) => {
  return (
      <>
    <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/parallax.js/1.5.0/parallax.min.js" />
    </Head>
    <div style={{ paddingTop: '70px' }} className="work-page hide-mobile">
        {projects.map((project, i) => {
            const banner = project.data.body.find(el => el.slice_type === 'hero_banner')
            return (
                <Link as={`/our-work/${project.uid}`} href="/our-work/[project]" key={project.id}>
                <a>
                    <div 
                        className="parallax-window lazy"
                        data-parallax="scroll" 
                        data-image-src={ banner.primary.image.url }
                    >
                        <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
                            {i === 0 &&
                                <div className="revised-h1-box">
                                    <h1 className="revised-h1">Our Work</h1>
                                </div>
                            }
                            <h2>{ banner.primary.hero_heading[0].text }</h2>
                            <div className="sub-head mt-4" style={{ display: 'flex', flexDirection: 'column' }}>
                                <p>{ banner.primary.hero_subheading[0].text }</p>
                            </div>
                            <div className="mt-4" style={{ position: 'relative', zIndex: 1 }}>
                                <article style={{ cursor: "pointer" }}>
                                    <span>view work</span>
                                </article>
                            </div>
                        </div>
                    </div>
                </a>
                
                </Link>
            )
        })}
        </div>
        <div className="work-page show-mobile" style={{ paddingTop: '70px' }}>
            {projects.map(project => {
                const banner = project.data.body.find(el => el.slice_type === 'hero_banner')
                return (
                    <div className="square project-container" key={project.id}>
                        <Link as={`/our-work/${project.uid}`} href="/our-work/[project]" >
                            <a>
                                <div className="content">
                                    <div className="square-bg lazy" style={{ backgroundImage: `url( ${banner.primary.image.url} )` }}></div>
                                    <h3>{ banner.primary.hero_heading[0].text }</h3>	
                                </div>
                            </a>
                        </Link>
                    </div>
                )
            })}
        </div>
    </>
  )
}



export async function getServerSideProps({ preview = null, previewData = {} }) {

    const page = await getSinglePage('our-work', previewData)
    const projects = await getProjects()
    return {
      props: {
        page,
        projects,
        preview
      }
    }
  }

export default WorkPage