import { getBgColor, getTextColor } from '../../utils'

const Stats = (props) => {

    const stats = props.slice.items

    const colors = {
        textColor: props.page.data.page_text_color,
        pageColor: props.page.data.page_color
    }

    return (
        <div style={{ position: "relative" }}>
        <div className="results-data-container py-5">
            <div className="container">
                {stats.map((stat, i) => (
                    <div className="data-field py-3 px-3" key={i}>
                        <div 
                            className="statistic-card"
                            style={{ 
                                color: getTextColor(props.slice.primary.stats_color, colors), 
                                background: getBgColor(props.slice.primary.stats_color, colors)
                            }} 
                        >
                            {stat.icon.url &&
                                <img src={stat.icon.url} alt={`Chelsea Apps ${stat.icon.alt}`} style={{ maxWidth: '114px', maxHeight: '114px' }}/>
                            }
                            <div>
                                <h4>{ stat.main_stat[0].text }</h4>
                                <p>{ stat.stat_text[0].text }</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Stats
