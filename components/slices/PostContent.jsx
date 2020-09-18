import Leak from '../common/Leak'
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic/prismic-configuration'
import { getBgColor, getTextColor } from '../../utils'

const PostContent = ({ slice }) => {

    const { items } = slice
    const colors = {
        pageColor: '#FEE315',
        textColor: '#1E1E1E'
    }

    return (
        <>
        {items.map((item, i) => (
            <div 
                key={i}
                className="post-section-container"
                style={{
                    position: 'relative',
                    padding: '3rem 0',
                    color: getTextColor(item.post_section_color, colors),
                    background: getBgColor(item.post_section_color, colors)
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
