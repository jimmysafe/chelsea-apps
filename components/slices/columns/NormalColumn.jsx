import { getBgColor, getTextColor } from '../../../utils'
import Leak from '../../common/Leak'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../../prismic/prismic-configuration'

const NormalColumn = (props) => {
    const section = props.slice
    return (
        <div style={{ position: "relative" }}>
            <section className="stages">
                <div className="stages-container" style={{ background: "white" }}>
                    <div 
                        className="stage-section py-5"
                        style= {{ 
                            position: 'relative',
                            color: getTextColor(section.primary.background_color, props),  
                            background: getBgColor(section.primary.background_color, props)
                        }}
                    >
                        <div className="container stage-core d-flex" style={{ flex: 2 }}>
                            {section.items.map((item, i) => (
                                <div key={i}>
                                    <h3>{ item.column_title[0].text }</h3>
                                    <img src={item.image.url} alt={`Chelsea Apps ${item.image.alt}`} />
                                    <div>
                                        <RichText render={item.column_text} linkResolver={linkResolver}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Leak leak={section.primary.leak} color={getBgColor(section.primary.background_color, props)}/>
        </div>
    )
}

export default NormalColumn
