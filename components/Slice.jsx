import ContactForm from "./slices/ContactForm";
import About from "./slices/About";
import Hero from "./slices/Hero";
import Quote from './slices/Quote'

const Slice = (props) => {
    const { slice_type } = props.slice;

    const sliceType = () => {
        switch(slice_type){
            case 'quote':
                return <Quote {...props} />
            case 'hero_banner':
                return <Hero {...props} />
            case 'contact_form':
                return <ContactForm {...props} />
            case 'about_me':
                return <About {...props} />
            default:
                return null
        }
    }

    return sliceType()
}

export default Slice