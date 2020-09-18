import { Fragment } from 'react'

const Hero = (props) => {

    const hero = props.slice.primary
    const colors = {
        textColor: props.page.data.page_text_color,
        pageColor: props.page.data.page_color ? props.page.data.page_color : '#FEE315'
    }

    return (
        <section 
            id="hero" 
            style={{ 
                backgroundImage: `url(${hero.image.url})`,
                justifyContent: "center!important",
                minHeight: "80vh!important"
            }}
        >
            <div className="container mb-4">
                <h1>
                        {hero.hero_heading.map(line => (
                            <span 
                                key={line.text}
                                style={{
                                    background: colors.pageColor,
                                    color: colors.textColor
                                }}
                                >
                                    { line.text }
                                </span>
                        ))}
                </h1>
            </div>
            <div id="container-target" className="container" style={{ lineHeight: 1 }}>
                {hero.hero_subheading.map(line => (
                    <Fragment key={line.text}>
                    <p 
                        style={{
                            background: colors.pageColor,
                            color: colors.textColor
                        }}
                    >
                        { line.text }
                    </p>
                    <br/>
                    </Fragment>
                ))}
            </div>
        </section>
    )
}

export default Hero
