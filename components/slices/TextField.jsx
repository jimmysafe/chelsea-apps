import Leak from '../common/Leak'
import { getBgColor, getTextColor } from '../../utils'
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic/prismic-configuration'

const TextField = (props) => {

    const field = props.slice.primary

    const title = field.section_title.length > 0 && field.section_title[0].text
    const body = field.section_body.length > 0  && field.section_body[0].text

    return (
        <div style={{ position: "relative" }}>
            <section 
                className="py-5 text-field"
                style={{
                    color: getTextColor(field.section_color, props),
                    background: getBgColor(field.section_color, props),
                    padding: title ? '3rem 0' : '4rem 0!important'
                }}
            >
                <div className="container">
                    {title && 
                        <h3>{ title }</h3>
                    }
                    {body &&
                        <div style={{ marginTop: title ? '1rem' : '0' }}>
                            <RichText render={field.section_body} linkResolver={linkResolver}/>
                        </div>
                    }
                </div>
            </section>
            <Leak leak={field.leak} color={getBgColor(field.section_color, props)}/>
        </div>
    )
}

export default TextField
