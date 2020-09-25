import { hrefResolver, linkResolver } from '../../prismic/prismic-configuration'
import Link from 'next/link'
import Leak from '../common/Leak'

const Works = ({ slice }) => {

    return (
        <section id="home-projects" style={{ position: "relative" }}>
            <div className="container d-flex flex-wrap justify-content-between">
                {slice.items.map((work, i) => (
                    <div className="square project-container" key={i}>
                        <Link as={linkResolver(work.link)} href={hrefResolver(work.link)} key={i}>
                            <a>
                                <div className="content">
                                    <div className="square-bg" style={{backgroundImage: `url( ${work.image.url} )`}}></div>
                                    <h3>{ work.project_name[0].text }</h3>	
                                </div>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Works
