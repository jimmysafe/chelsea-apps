import Leak from '../common/Leak'
import { getBgColor, getTextColor } from '../../utils'

const TextField = (props) => {

    const field = props.slice.primary
    const colors = {
        textColor: props.page.data.page_text_color,
        pageColor: props.page.data.page_color
    }

    return (
        <div style={{ position: "relative" }}>
            <section 
                className="py-5 text-field"
                style={{
                    color: getTextColor(field.section_color, colors),
                    background: getBgColor(field.section_color, colors),
                    padding: field.section_title[0].text ? '3rem 0' : '4rem 0!important'
                }}
            >
                <div className="container">
                    {field.section_title[0].text && 
                        <h3>
                            { field.section_title[0].text }
                        </h3>
                    }
                    {field.section_body[0].text &&
                        <p style={{ marginTop: field.section_title[0].text ? '1rem' : '0' }}>{ field.section_body[0].text }</p>
                    }
                </div>
            </section>
            <Leak leak={field.leak} color={getBgColor(field.section_color, colors)}/>
        </div>
    )
}

export default TextField
