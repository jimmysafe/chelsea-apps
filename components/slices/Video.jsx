import ReactPlayer from 'react-player'
import { getBgColor } from '../../utils'

const Video = (props) => {

    const colors = {
        pageColor: props.page.data.page_color ? props.page.data.page_color : '#FEE315'
    }

    return (
        <div 
            className="d-flex justify-content-center align-items-center"  
            style={{ 
                padding: '4rem 0',
                background: getBgColor(props.slice.primary.background_color, colors)
                }}
        >
            <ReactPlayer url={props.slice.primary.video_url[0].text} controls/>
        </div>
    )
}

export default Video
