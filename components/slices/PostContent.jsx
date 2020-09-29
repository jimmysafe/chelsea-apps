import Leak from '../common/Leak'
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic/prismic-configuration'
import { getBgColor, getTextColor } from '../../utils'

const PostContent = (props) => {

    const { items } = props.slice

    return (
        <>
        {items.map((item, i) => (
            <div 
                key={i}
                className="post-section-container"
                style={{
                    position: 'relative',
                    padding: '3rem 0',
                    color: getTextColor(item.post_section_color, props),
                    background: getBgColor(item.post_section_color, props)
                }}
            >
                <div className="container">
                    <div className="post-section-content">
                        <RichText render={item.post_content} linkResolver={linkResolver} />
                    </div>
                </div>
                <Leak color={item.post_section_color} leak={item.leak}/>
            </div>
        ))}
    </>
    )
}

export default PostContent
