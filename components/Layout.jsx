import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

const Layout = (props) => {

    const textColor = props.page ? props.page.data.page_text_color : '#1E1E1E'
    const bgColor = props.page ? props.page.data.page_color : '#FEE315'

    return (
        <>
        <Nav textColor={textColor} bgColor={bgColor}/>
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
