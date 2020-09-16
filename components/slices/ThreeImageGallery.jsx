
const ThreeImageGallery = ({ slice }) => {
    const images = slice.primary
    return (
        <section style={{ background: '#ffffff', color: '#1E1E1E', padding: '3rem 0' }}>
            <div className="container">
                {images.main_text[0].text &&
                    <p style={{ padding: "1rem" }}>{images.main_text[0].text}</p>
                }
                <img className="full-width-img" src={ images.image1.url } alt={`Chelsea Apps ${images.image1.alt}`} />
                <div className="d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
                    <img className="half-width-img" src={ images.image2.url } alt={`Chelsea Apps ${images.image2.alt}`} />
                    <img className="half-width-img" src={ images.image3.url } alt={`Chelsea Apps ${images.image3.alt}`} />
                </div>
            </div>
        </section>
    )
}

export default ThreeImageGallery
