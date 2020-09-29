import ReactPlayer from 'react-player'
import { getBgColor } from '../../utils'

const Video = (props) => {

    return (
        <div 
            className="d-flex justify-content-center align-items-center"  
            style={{ 
                padding: '4rem 0',
                background: getBgColor(props.slice.primary.background_color, props)
                }}
        >
            <ReactPlayer url={props.slice.primary.video_url[0].text} controls/>
        </div>
    )
}

export default Video
