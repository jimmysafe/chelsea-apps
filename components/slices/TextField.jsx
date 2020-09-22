import Leak from '../common/Leak'
import { getBgColor, getTextColor } from '../../utils'

const TextField = (props) => {

    const field = props.slice.primary
    const colors = {
        textColor: props.page.data.page_text_color,
        pageColor: props.page.data.page_color ? props.page.data.page_color : '#FEE315'
    }

    const title = field.section_title.length > 0 && field.section_title[0].text
    const body = field.section_body.length > 0  && field.section_body[0].text

    return (
        <div style={{ position: "relative" }}>
            <section 
                className="py-5 text-field"
                style={{
                    color: getTextColor(field.section_color, colors),
                    background: getBgColor(field.section_color, colors),
                    padding: title ? '3rem 0' : '4rem 0!important'
                }}
            >
                <div className="container">
                    {title && 
                        <h3>{ title }</h3>
                    }
                    {body &&
                        <p style={{ marginTop: title ? '1rem' : '0' }}>{ body }</p>
                    }
                </div>
            </section>
            <Leak leak={field.leak} color={getBgColor(field.section_color, colors)}/>
        </div>
    )
}

export default TextField
