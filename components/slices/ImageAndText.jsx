import React from 'react'
import Leak from '../common/Leak'
import { getBgColor, getTextColor } from '../../utils'

const ImageAndText = (props) => {

    const section = props.slice.primary
    const colors = {
        textColor: props.page.data.page_text_color,
        pageColor: props.page.data.page_color ? props.page.data.page_color : '#FEE315'
    }

    return (
        <div style={{ position: "relative" }}>
            <section 
                className="sgl solution" 
                style={{ 
                    color: getTextColor(section.section_color, colors), 
                    background: getBgColor(section.section_color, colors) 
                }}
            >
                <div className="container d-flex">
                    <div className="sgl-column">
                        <h3>{section.title1[0].text}</h3>
                        <p>{section.section_body[0].text}</p>
                    </div>
                    <div className="sgl-column">
                        <img src={section.image.url} style={{ width: "100%" }} alt={`Chelsea Apps ${section.image.alt}`} />
                    </div>
                </div>
            </section>
            <Leak leak={section.leak} color={getBgColor(section.section_color, colors)}/>
        </div>
    )
}

export default ImageAndText
