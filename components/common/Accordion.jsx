
import { Fragment, useState } from 'react'

const sites = [
    {
      headline: "uk head office",
      addr: "Telephone House, Bournemouth, BH1 3NE",
      email: "bournemouth@chelsea-apps.com",
      tel: "+ 020 8057 8878",
      imgUrl: "/images/bournemouth.png"
    },
    {
      headline: "London Office",
      addr: "Telephone House, Bournemouth, BH1 3NE",
      email: "bournemouth@chelsea-apps.com",
      tel: "+ 020 8057 8878",
      imgUrl: "/images/london.png"
    },
    {
      headline: "Chicago Office",
      addr: "Telephone House, Bournemouth, BH1 3NE",
      email: "bournemouth@chelsea-apps.com",
      tel: "+ 020 8057 8878",
      imgUrl: "/images/chicago.png"
    }
  ];

const Accordion = () => {
    const [activeSection, setActiveSection] = useState(0);

    const handleChange = (i) => {
        setActiveSection(i);
    };

    return (
        <div className="accordion" style={{ maxWidth: "500px" }}>
        {sites.map((site, i) => (
          <Fragment key={i}>
            <div className={`section-header`} onClick={() => handleChange(i)}>
              {site.headline}
              <img src="/images/right_arrow.svg" className={`accordion-arrow ${activeSection === i ? "arrowOpen" : "arrowClosed"}`} alt=""/>
            </div>
            <div
              className={`section-content ${
                activeSection === i ? "open" : "closed"
              }`}
            >
              <img
                src={site.imgUrl}
                alt="Chelsea Apps Bournemouth"
                style={{ width: "100%" }}
              />
              <div className="paddingaroundnames">
                <p>{site.addr}</p>
                <p>
                  <a
                    className="link-accordion"
                    href="mailto:bournemouth@chelsea-apps.com"
                  >
                    {site.email}
                  </a>
                </p>
                <p>
                  <a className="link-accordion" href="tel:+ 44 303 700 440">
                    {site.tel}
                  </a>
                </p>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    )
}

export default Accordion
