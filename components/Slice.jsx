import ContactForm from "./slices/ContactForm";
import Hero from "./slices/Hero";
import Offices from "./slices/Offices";
import Parallax from "./slices/Parallax";
import Quote from './slices/Quote'
import Stats from "./slices/Stats";
import TextField from "./slices/TextField";
import Image from './slices/Image'
import ImageAndText from "./slices/ImageAndText";
import Columns from "./slices/Columns";

const Slice = (props) => {
    const { slice_type } = props.slice;

    const sliceType = () => {
        switch(slice_type){
            case 'columns':
                return <Columns {...props} />
            case 'image_and_text':
                return <ImageAndText {...props} />
            case 'single_image':
                return <Image {...props} />
            case 'parallax_image':
                return <Parallax {...props} />
            case 'text_field':
                return <TextField {...props} />
            case 'offices':
                return <Offices {...props} />
            case 'statistics':
                return <Stats {...props} />
            case 'quote':
                return <Quote {...props} />
            case 'hero_banner':
                return <Hero {...props} />
            case 'contact_form':
                return <ContactForm {...props} />
            default:
                return null
        }
    }

    return sliceType()
}

export default Slice