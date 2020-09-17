import nav from '../nav.json'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Logo from './common/Logo'

const Nav = ({ bgColor, textColor }) => {
    const router = useRouter()
    const [open, setOpen] = useState(false)

    const NavItem = (item, isMobile) => {

        const customLink = (link) => {
            return (
                <li 
                    className={isMobile ? (open ? 'is-shown delay' : 'no-delay') : ''}
                    onClick={() => { router.push(link); setOpen(!open) }} 
                    key={item.name}
                >
                    <a className={isMobile ? '': textColor}>
                        {item.name}
                    </a>
                </li>
            )
        }

        switch(item.url){
            case '/home':
                return customLink('/')
            case '/our-work':
                return customLink('/our-work')
            case '/services':
                return customLink('/services')
            case '/blog':
                return customLink('/blog')
            case '/contact':
                return customLink('/contact')
            default:
                return (
                    <Link as={item.url} href={item.href} key={item.name}>
                        <li className={isMobile ? (open ? 'is-shown delay' : 'no-delay') : ''} onClick={() => setOpen(!open)}>
                            <a className={isMobile ? '': textColor}>
                                {item.name}
                            </a>
                        </li>
                    </Link>
                )
        }
    }

    return (
        <header className="header" style={{
            background: bgColor,
            color: textColor
        }}>
            <div className="container">
                <div className="wrapper" style={{zIndex: 100000}}>
                    <nav className="navbar">
                        {textColor === "white" ? (
                            <Link href="/">
                                <a className="navbar-brand">
                                    <Logo white />
                                </a>
                            </Link>
                        ) : (
                            <Link href="/">
                                <a className="navbar-brand">
                                    <Logo black />
                                </a>
                            </Link>
                        )
                        }
                    
                        <ul>
                            {nav.map(item => NavItem(item) )}
                        </ul>

                        <button className={`hamburger hamburger--slider ${open ? 'is-active' : ''}`} type="button" onClick={() => setOpen(!open)}>
                            <span className="hamburger-box">
                                {textColor === "white" ? (
                                    <span className="hamburger-inner light"></span>
                                ) : (
                                    <span className="hamburger-inner dark"></span>
                                )}
                            </span>
                        </button>

                        <div className={`overlay ${open ? 'is-open no-delay translate' : 'delay'}`}>
                            <ul>
                                {nav.map(item => NavItem(item, true) )}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Nav
