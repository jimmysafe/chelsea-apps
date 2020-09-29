import NormalColumn from './columns/NormalColumn'
import IconColumn from './columns/IconColumn'
import AnimatedColumn from './columns/AnimatedColumn'

const Columns = (props) => {
    const section = props.slice
    const renderColumn = () => {
        switch(section.primary.type){
            case 'normal':
                return <NormalColumn { ...props }/>
            case 'icon':
                return <IconColumn { ...props }/>
            case 'animatable':
                return <AnimatedColumn  { ...props }/>
            default:
                return <NormalColumn { ...props }/>
        }
    }

    return renderColumn()
}

export default Columns
