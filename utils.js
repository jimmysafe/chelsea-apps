export const siteUrl = process.env.NODE_ENV === 'development' ? 'https://localhost:3000' : 'https://chantalciaffardini.com'

export const getBgColor = (color, pageColors) => {
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

export const getTextColor = (color, pageColors) => {
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
