import Link from 'next/link'

const Offices = (props) => {
    const offices = props.slice.items
    return (
        <section className="locations">
            <div className="container d-flex">
                {offices.map((office, i) => (
                    <div className="location-container" key={i}>
                        <h3>{office.city[0].text}</h3>
                        <Link as={`/contact`} href="/[page]">
                            <a>
                                <img src={office.image.url} alt="Chelsea Apps {{ locations.city }}" />
                            </a>
                        </Link>
                        <p>{office.email[0].text}</p>
                        <p>{office.phone[0].text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Offices
