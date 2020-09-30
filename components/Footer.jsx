import nav from '../nav.json'
import Link from 'next/link'
import FooterVideo from './common/FooterVideo'

const bottomLinks = [
    {
        "name": "Sitemap",
        "url": "sitemap.xml"
    },
    {
        "name": "Privacy Policy",
        "url": "privacy-policy"
    },
    {
        "name": "Legal",
        "url": "legal"
    },
    {
        "name": "Cookies",
        "url": "cookies"
    }
]

const Footer = ({ bgColor, textColor }) => {
    return (
        <>
        <FooterVideo />
        <footer id="footer">
            <div className="container">
                <div className="contact-tab" style={{
                    background: bgColor,
                    color: textColor
                }}>
                    <div className="tab-body">
                        <h3 className="py-3 lets-talk">Let's chat.</h3>
                        <p style={{ fontWeight: 100 }}>Reach out if you have </p>
                        <p style={{ fontWeight: 100 }}>a project you want to  </p>
                        <p style={{ fontWeight: 100 }}> discuss. </p>
                    </div>
                    <Link href="/contact">
                        <div className="tab-footer text-center" style={{ cursor: 'pointer' }}>
                                <h3>Contact us</h3>
                        </div>
                    </Link>
                </div>
                <section className="footer-logo-container">
                    <div className="footer-logo">
                        <h2>CHELSEA<br/>APPS</h2>
                    
                    </div>
                    <div className="social-links">
                        <a href="https://twitter.com/ChelseaApps ">
                            <img src="/images/twitter.svg" alt="asd"/>
                        </a>
                        <a href="https://www.linkedin.com/company/1270750/admin/ ">
                            <img src="/images/linkedin.svg" alt="asd"/>
                        </a>
                        <a href="https://www.instagram.com/chelsea_apps_/">
                            <img src="/images/instagram.svg" alt="asd"/>
                        </a>
                    </div>
                </section>
                <section className="footer-info d-flex">
                    <div className="footer-nav">
                        <ul>
                            {nav.map(item => (
                                <Link as={`/${item.url}`} href="/[page]" key={item.name}>
                                    <li>
                                        <a>
                                            {item.name}
                                        </a>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="locations">
                        <div className="city">
                            <span>Bournemouth</span><br/>
                            <address>Telephone House</address>
                            <address>Bournemouth, BH1 3NE</address>
                        </div>
                        <div className="city">
                            <span>London</span><br/>
                            <address>30 Stamford Street</address>
                            <address>London SE1 9LQ</address>
                        </div>
                        <div className="city">
                            <span>Chicago</span><br/>
                            <address>625 W Adams Street</address>
                            <address>Chicago, IL 60661</address>
                        </div>
                    </div>
                </section>
                <div style={{textAlign: 'right', fontSize: "14px"}} className="footer-bottom-text row">
                    <div className="col-sm-6 bottom-links" style={{ marginTop: "45px", textAlign: "left" }}>
                        {bottomLinks.map((item, i) => (
                            <Link as={`/${item.url}`} href="/[page]" key={i}>
                                <span>
                                    <a className="SC-link">
                                        {item.name}
                                    </a>
                                {i !== bottomLinks.length - 1 && "|" }
                                </span>
                            </Link>
                        ))}
                    </div>
                    <div className="col-sm-6">
                        <span>&copy; Chelsea Apps {new Date().getFullYear()}</span><br/>
                        <span>part of the   <a className="SC-link" href="https://3sidedcube.com/">3 SIDED CUBE </a>family</span><br/>
                        <span>... Kittens may die if you steal our stuff</span>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer
