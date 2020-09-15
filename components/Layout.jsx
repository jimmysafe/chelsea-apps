import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

const Layout = (props) => {
    return (
        <>
        <Nav page={props.page}/>
        <main>
            {props.children}
        </main>
        {/* <Footer page={props.page}/> */}
        </>
    )
}

export default Layout
