import { getBgColor, getTextColor } from '../../../utils'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../../prismic/prismic-configuration'

const IconColumn = (props) => {
    const section = props.slice
    return (
    <section 
        className="three-text-column"
        style={{ 
            background: getBgColor(section.primary.background_color, props) 
        }}
    >
        <div className="container">
            {section.items.map((item, i) => (
                <div className="stage" key={i}>
                    <div className="stage-header" style={{ background: '#FEE315' }}>
                        <h3>{ item.column_title[0].text }</h3>
                        {item.image.url &&
                            <div className="svg">
                                <img src={item.image.url} alt={`Chelsea Apps ${item.image.alt}`} />
                            </div>
                        }
                    </div>
                    <div className="stage-body" style={{ color: getTextColor(section.primary.background_color, props) }}>
                        <RichText render={item.column_text} linkResolver={linkResolver}/>
                    </div>
                </div>
            ))}
        </div>
    </section>
    )
}

export default IconColumn
