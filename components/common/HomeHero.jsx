import { useEffect } from 'react'
import Head from 'next/head'

const HomeHero = () => {
    useEffect(() => {
          var params = {
            container: document.getElementById('lottie'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: `glitch/data.json`
        };
        var anim; 
        anim = lottie.loadAnimation(params);
    }, [])
    return (
        <>
        <Head>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" />
            <script type="text/javascript" src="https://cdn.rawgit.com/mrvautin/typewrite/master/dist/typewrite.min.js" />
            <script type="text/javascript" src="/glitch/lottie.js" />
            <script src="https://cdn.jsdelivr.net/gh/hmongouachon/mgGlitch/src/mgGlitch.min.js" />
            <script type="text/javascript" src="/glitch/glitch.js" />
        </Head>
        <div id="hero" style={{ background: '#FEE315', height: '100vh' }}>
            <div id="wrapper" className="glitch-img">
                        <img 
                            src="/glitch/parental.png" 
                            alt="parental advisory" 
                            className="parental-advisory" 
                            style={{display: 'none' }} />

                        <video 
                            playsInline
                            muted
                            preload="metadata"
                            id="gifVideo"
                            src="/glitch/hero_vid.mp4"
                            type="video/mp4" 
                        />
                    
                        <div className="glitch-img">
                            <div id="lottie" style={{ width: '100%', height: '100%', top: 0, left: 0 }} />
                        
                            <div id="conatiner-home-hero">
                                <div className="container mobile-zero-margin">
                                    <h2 className="h1-writings" style={{ display: 'none' }}>
                                        <span>WE BUILD</span>
                                        <span>MOBILE &</span>
                                        <span>WEB</span>
                                        <span>APPLICATIONS</span>
                                    </h2>
                                    <h2 className="h1-writings-two">
                                        <div id="first-typewrite"></div>
                                    </h2>
                                    <h2 className="h1-writings-three" style={{ display: 'none' }}>
                                        <span>BUT WE</span>
                                        <span>COME</span>
                                        <span>WITH A</span>
                                        <span>HEALTH</span>
                                        <span>WARNING</span>
                                    </h2>
                                    <h2 className="h1-writings-four" style={{display: 'none'}}>
                                        <span>WE CHALLENGE</span>
                                        <span>YOUR IDEAS</span>
                                    
                                        <div className="typewriter-four">
                                            <div id="final-typewrite"></div>
                                        </div>
                                    </h2>
                                    <div className="container {{ color }} hero-sub" style={{ display: 'none' }} id="sub-hero-appear">
                                        <h1>
                                            <span className="desktop-subtitle">We build Web & Mobile</span>
                                            <span className="desktop-subtitle">applications that millions of people love</span>
                                        
                                
                                            <span className="mobile-subtitle">We build Web & Mobile</span>
                                            <span className="mobile-subtitle">applications that </span>
                                            <span className="mobile-subtitle">millions of people love</span>
                                    
                                        </h1>
                                    </div>
                                    <div className="bottom-bar" style={{ display: 'none' }} />
                                </div>
                            </div>
                        </div>
            </div>
        </div>
        </>
    )
}

export default HomeHero
