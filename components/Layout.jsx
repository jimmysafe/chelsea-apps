import React from 'react'
import Nav from './Nav'

const Layout = (props) => {
    return (
        <>
        <Nav page={props.page}/>
        <main>
            {props.children}
        </main>
        </>
    )
}

export default Layout
