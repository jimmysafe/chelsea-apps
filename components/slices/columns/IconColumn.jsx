import { getBgColor, getTextColor } from '../../../utils'

const IconColumn = ({ section, colors }) => {
    return (
    <section 
        className="three-text-column"
        style={{ 
            background: getBgColor(section.primary.background_color, colors) 
        }}
    >
        <div className="container">
            {section.items.map((item, i) => (
                <div className="stage">
                    <div className="stage-header" style={{ background: '#FEE315' }}>
                        <h3>{ item.column_title[0].text }</h3>
                        {item.image.url &&
                            <div className="svg">
                                <img src={item.image.url} alt={`Chelsea Apps ${item.image.alt}`} />
                            </div>
                        }
                    </div>
                    <div className="stage-body" style={{ color: getTextColor(section.primary.background_color, colors) }}>
                        <p>{ item.column_text[0].text }</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
    )
}

export default IconColumn