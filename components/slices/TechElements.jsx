
const TechElements = ({ slice }) => {

    const elements = slice.items

    return (
        <section className="el-block py-5" style={{ background: "#FEE315" }}>
            <div className="container">
                <div className="el-container">
                    {elements.map((el, i) => (
                    <div className="el-item" key={i}>
                        <div className="el-img-container">
                            <img src={ el.tech_icon.url } alt={ el.tech_icon.alt } />
                        </div>
                        <div className="el-text-container">
                            <h3>{ el.tech_title[0].text }</h3>
                        </div>
                        {el.tech_body.length > 0 &&
                            <p>{ el.tech_body[0].text }</p>
                        }
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechElements
