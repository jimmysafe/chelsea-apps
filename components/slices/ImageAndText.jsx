import React from 'react'
import Leak from '../common/Leak'
import { getBgColor, getTextColor } from '../../utils'
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic/prismic-configuration'

const ImageAndText = (props) => {

    const section = props.slice.primary

    return (
        <div style={{ position: "relative" }}>
            <section 
                className="sgl solution" 
                style={{ 
                    color: getTextColor(section.section_color, props), 
                    background: getBgColor(section.section_color, props) 
                }}
            >
                <div className="container d-flex">
                    <div className="sgl-column">
                        <h3>{section.title1[0].text}</h3>
                        <RichText render={section.section_body} linkResolver={linkResolver} />
                    </div>
                    <div className="sgl-column">
                        <img src={section.image.url} style={{ width: "100%" }} alt={`Chelsea Apps ${section.image.alt}`} />
                    </div>
                </div>
            </section>
            <Leak leak={section.leak} color={getBgColor(section.section_color, props)}/>
        </div>
    )
}

export default ImageAndText
