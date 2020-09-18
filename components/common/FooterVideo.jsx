

const FooterVideo = () => {
    return (
        <>
        <div className="footer-video video-desktop">
            <video id="video-normal" width="100%" className="lazy" height="auto" autoPlay loop muted preload="true" playsInline>
                {/* <data-src src="/images/footer-video-normal.mp4" type="video/mp4"></data-src> */}
                <source src="/images/footer-video-normal.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
        <div className="footer-video video-mobile"> 
            <video id="video-normal-mobile" width="100%" className="lazy" height="auto" autoPlay loop muted preload="true" playsInline>
                <source src="/images/footer-video-mobile-normal.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>


        <div className="footer-video-placeholder"></div>
        </>
    )
}

export default FooterVideo
