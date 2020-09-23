import Seo from './Seo'
import Footer from './Footer'
import Nav from './Nav'
import { useRouter } from 'next/router'

const Layout = (props) => {
    const router = useRouter()
    const textColor = props.page ? props.page.data.page_text_color : '#1E1E1E'
    const bgColor = props.page ? props.page.data.page_color : '#FEE315'

    return (
        <>
        <Seo page={props.page}/>
        <Nav textColor={textColor} bgColor={bgColor}/>
        {props.preview && 
            <div className="preview">
                <p>Preview Mode</p>
                <div className="exit-preview" onClick={() => router.push('/api/exit-preview')}>
                    <p>Exit</p>
                </div>
            </div>
        }
        <section id="content" role="main" className="content-wrapper">
            <div className="wrapper">
                {props.children}
            </div>
        </section>
        <Footer textColor={textColor} bgColor={bgColor}/>
        </>
    )
}

export default Layout
