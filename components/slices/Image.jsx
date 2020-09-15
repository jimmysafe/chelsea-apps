import Link from 'next/link'
import { hrefResolver, linkResolver } from '../../prismic/prismic-configuration'

const Image = ({ slice }) => {

    // (isLink, link), image, size(small medium large)
    const image = slice.primary
    const isLink = image.link.link_type !== 'Any'

    const getImageSize = () => {
        switch(image.size){
            case 'small':
                return '330px'
            case 'medium':
                return '490px'
            case 'large':
                return '90%'
        }
    }

    if(isLink){
        return (
        <section class="py-5" style={{background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div class="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Link as={linkResolver(image.link)} href={hrefResolver(image.link)}>
                    <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={image.image.url} style={{maxWidth: getImageSize() }} alt={image.image.alt} />
                    </a>
                </Link>
            </div>
        </section> 
        )
    } else {
        return (
        <section class="py-5" style={{background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div class="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={image.image.url} style={{maxWidth: getImageSize() }} alt={image.image.alt} />
            </div>
        </section> 
        )
    }
}

export default Image
