import ContactForm from "./slices/ContactForm";
import Hero from "./slices/Hero";
import Quote from './slices/Quote'
import Stats from "./slices/Stats";

const Slice = (props) => {
    const { slice_type } = props.slice;

    const sliceType = () => {
        switch(slice_type){
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