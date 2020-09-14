import ContactForm from "./slices/ContactForm";
import About from "./slices/About";

const Slice = (props) => {
    const { slice_type } = props.slice;

    const sliceType = () => {
        switch(slice_type){
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