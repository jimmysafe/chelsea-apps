import { Parallax as _Parallax } from 'react-parallax';

const Parallax = ({ slice }) => {
    return (
        <_Parallax
            bgImage={slice.primary.image.url}
            bgImageAlt={slice.primary.image.alt}
            strength={430}
        >
            <div style={{ height: '80vh' }} />
        </_Parallax>
    )
}

export default Parallax
