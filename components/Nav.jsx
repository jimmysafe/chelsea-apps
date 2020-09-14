import nav from '../nav.json'
import Link from 'next/link'
import { useState } from 'react'

const Nav = ({ page }) => {
    const [open, setOpen] = useState(false)
    
    return (
        <header className="header" style={{
            background: page.data.page_color,
            color: page.data.page_text_color
        }}>
            <div className="container">
                <div className="wrapper" style={{zIndex: 100000}}>
                    <nav className="navbar">
                        {page.data.page_text_color === "white" ? (
                            <a className="navbar-brand" href="/">
                                {/* white logo */}
                                <img src="/images/x.svg" alt="white logo"/>
                            </a>
                        ) : (
                            <a className="navbar-brand" href="/">
                                {/* black logo */}
                                <img src="/images/x.svg" alt="black logo"/>
                            </a>
                        )
                        }
                    
                        <ul>
                            {nav.map(item => (
                                <Link as={`/${item.url}`} href="/[page]" key={item.name}>
                                    <li>
                                        <a className={page.data.page_text_color}>
                                            {item.name}
                                        </a>
                                    </li>
                                </Link>
                            ))}
                        </ul>

                        <button className={`hamburger hamburger--slider ${open ? 'is-active' : ''}`} type="button" onClick={() => setOpen(!open)}>
                            <span className="hamburger-box">
                                {page.data.page_text_color === "white" ? (
                                    <span className="hamburger-inner light"></span>
                                ) : (
                                    <span className="hamburger-inner dark"></span>
                                )}
                            </span>
                        </button>

                        <div className={`overlay ${open ? 'is-open no-delay translate' : 'delay'}`}>
                            <ul>
                                {nav.map(item => (
                                    <Link as={`/${item.url}`} href="/[page]" key={item.name}>
                                        <li className={`${open ? 'is-shown delay' : 'no-delay'}`}>
                                            <a>
                                                {item.name}
                                            </a>
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Nav
