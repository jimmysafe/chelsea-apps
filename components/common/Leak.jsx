const { default: LeakSVG } = require("./LeakSVG")

const Leak = ({ leak, color }) => {
    if(leak && leak !== 'none'){
        
        const svgColor = () => {
            switch(color){
                case 'white':
                    return 'white'
                case 'black':
                    return '#1E1E1E'
                default:
                    return color
            }
        }

        return (
            <div className={`leak ${leak === "right" ? 'svg-right' : 'svg-left'}`}>
                <LeakSVG color={svgColor()}/>
            </div>
        )
    } else return null
}

export default Leak
