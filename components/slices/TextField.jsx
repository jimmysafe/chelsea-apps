import Leak from '../common/Leak'

const TextField = (props) => {

    const field = props.slice.primary
    const colors = {
        textColor: props.page.data.page_text_color,
        pageColor: props.page.data.page_color
    }

    const getBgColor = () => {
        switch(field.section_color){
            case 'page color':
                return colors.pageColor
            case 'white':
                return 'white'
            case 'black':
                return '#1E1E1E'
            default:
                return ""
        }
    }  
    
    const getTextColor = () => {
        switch(field.section_color){
            case 'page color':
                return colors.textColor
            case 'white':
                return '#1E1E1E'
            case 'black':
                return 'white'
            default:
                return ""
        }
    } 

    

    return (
        <div style={{ position: "relative" }}>
            <section 
                className="py-5 text-field"
                style={{
                    color: getTextColor(),
                    background: getBgColor(),
                    padding: field.section_title[0].text ? '3rem 0' : '4rem 0!important'
                }}
            >
                <div className="container">
                    {field.section_title[0].text && 
                        <h3>
                            { field.section_title[0].text }
                        </h3>
                    }
                    {field.section_body[0].text &&
                        <p style={{ marginTop: field.section_title[0].text ? '1rem' : '0' }}>{ field.section_body[0].text }</p>
                    }
                </div>
            </section>
            <Leak leak={field.leak} color={getBgColor()}/>
        </div>
    )
}

export default TextField
