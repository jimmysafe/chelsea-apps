import { getProjects, getSinglePage } from "../../prismic/queries"
import Link from 'next/link'
import { Parallax } from 'react-parallax';
import { checkIsNotFound } from "../../utils";

const WorkPage = ({ projects, page }) => {
  return (
    <>
    <div style={{ paddingTop: '70px' }} className="work-page hide-mobile">
        {projects.map((project, i) => {
            const banner = project.data.body.find(el => el.slice_type === 'hero_banner')
            return (
                <Link as={`/our-work/${project.uid}`} href="/our-work/[project]" key={project.id}>
                <a>
                    <Parallax
                        bgImage={banner.primary.image.url}
                        bgImageAlt={banner.primary.image.alt}
                        strength={300}
                    >
                        <div className="parallax-window">
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
                    </Parallax>
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



export async function getServerSideProps({ res, preview = null, previewData = {} }) {

    const page = await getSinglePage('our-work', previewData)
    checkIsNotFound(page, res)
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