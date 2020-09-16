import { hrefResolver, linkResolver } from '../../../prismic/prismic-configuration'
import Link from 'next/link'

const AnimatedColumn = ({ section }) => {
    return (
        <div className="three-column-with-image-animation-and-link">
            <section className="stages">
                <div className="stages-container" style={{ background: "white" }}>
                    <div className="stage-section py-5" style={{ position: "relative", color: "white", background: "#1E1E1E" }}>
                        <div className="container stage-core d-flex" style={{ justifyContent: 'center' }}>
                            {section.items.map((item, i) => (
                                 <div key={i}>
                                    <h3>{ item.column_title[0].text }</h3>
                                    {item.link.link_type !== "Any" &&
                                        <Link as={linkResolver(item.link)} href={hrefResolver(item.link)}>
                                            <a>
                                                <div className="image-link-container">
                                                    <img src={item.image.url} alt={`Chelsea Apps ${ item.image.alt }`} />
                                                    <h3>view more</h3>
                                                </div>
                                            </a>
                                        </Link>
                                    }
                                    <div>
                                        <p>{ item.column_text[0].text }</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AnimatedColumn