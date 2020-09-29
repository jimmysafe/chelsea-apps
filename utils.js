export const siteUrl = process.env.NODE_ENV === 'development' ? 'https://localhost:3000' : 'https://chantalciaffardini.com'

export const getBgColor = (color, props) => {
    const pageColors = {
        textColor: props.page.data.page_text_color,
        pageColor: props.page.data.page_color ? props.page.data.page_color : '#FEE315'
    }
    switch(color){
        case 'page color':
            return pageColors.pageColor
        case 'white':
            return 'white'
        case 'black':
            return '#1E1E1E'
        default:
            return ""
    }
}  

export const getTextColor = (color, props) => {
    const pageColors = {
        textColor: props.page.data.page_text_color,
        pageColor: props.page.data.page_color ? props.page.data.page_color : '#FEE315'
    }
    switch(color){
        case 'page color':
            return pageColors.textColor
        case 'white':
            return '#1E1E1E'
        case 'black':
            return 'white'
        default:
            return ""
    }
} 

export const checkIsNotFound = (page, res) => {
    if(!page && res){
        res.writeHead(302, {
            Location: '/404'
        });
        res.end();
        return
    }
}
