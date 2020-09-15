import LeakWhite from '../../public/images/leak_white.svg'
import LeakBlack from '../../public/images/leak_black.svg'

const Quote = (props) => {
    
    const quote = props.slice.primary
    console.log(quote)

    const getQuoteUrl = () => {
        if(quote.quote_color === "white") return '/images/quotes.svg'
        else return '/images/quotes_white.svg'
    }

    return (
        <div style={{ position: "relative" }}>
            <section className={`quote ${quote.quote_color === "white" ? "blck" : ""}`}>
                <div className="container " style={{ position: "relative" }}>
                   
                        <img src={getQuoteUrl()} alt="Quote" style={{ position: 'absolute', top: 0, left: '100px' }} />
                        
                        <div className={`quote-container ${ quote.quote_color === 'white' ? "white" : '' }`}>
                            <h4>{ quote.quote_body[0].text }</h4>
                            <p id="quote_author" className="mt-5">
                                { quote.quote_author[0].text }
                            </p>
                        </div>

                        <img src={getQuoteUrl()} alt="Quote2" className="quotes-on-home" style={{ position: 'absolute', bottom: 0, right: '100px', transform: 'rotate(180deg)' }} />

                </div>
            </section>
            {quote.leak !== 'none' &&
                <div className={`leak ${quote.leak === "right" ? 'svg-right' : 'svg-left'}`}>
                    {quote.quote_color === "white" ? <LeakWhite /> : <LeakBlack />}
                </div>
            }
        </div>
    )
}

export default Quote
