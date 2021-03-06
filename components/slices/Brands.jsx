import { getBgColor } from '../../utils'

const Brands = (props) => {

    const brands = props.slice.items
    const sectionColor = props.slice.primary.section_color

    return (
        <section 
            className="brand-block py-5" 
            style={{ background: getBgColor(sectionColor, props) }}
        >
            <div className="container">
                <div className="brand-container">
                    {brands.map((brand, i) => (
                        <div className="brand-item" key={i}>
                                <img 
                                    className={sectionColor !== 'black' ? 'make-black' : ''} 
                                    src={ brand.image.url } 
                                    alt={ brand.image.alt }
                                    style={{ width: '100%' }}
                                />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Brands
