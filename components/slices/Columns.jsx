import NormalColumn from './columns/NormalColumn'
import IconColumn from './columns/IconColumn'
import AnimatedColumn from './columns/AnimatedColumn'

const Columns = (props) => {

    const section = props.slice
    const colors = {
        textColor: props.page.data.page_text_color,
        pageColor: props.page.data.page_color
    }

    const renderColumn = () => {
        switch(section.primary.type){
            case 'normal':
                return <NormalColumn colors={colors} section={section}/>
            case 'icon':
                return <IconColumn colors={colors} section={section}/>
            case 'animatable':
                return <AnimatedColumn  section={section}/>
            default:
                return <NormalColumn colors={colors} section={section}/>
        }
    }

    return renderColumn()
}

export default Columns
