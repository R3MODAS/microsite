import locationImg from "../assets/location.png"
import Banner from "../components/Banner"
import plane from "../assets/plane.png"
import it from "../assets/it.png"
import retail from "../assets/retail.png"
import health from "../assets/health.png"
import arrow from "../assets/arrow-health.svg"
import school from "../assets/school.png"
import "../css/location.css"

const Location = () => {
  return (
    <>
      {/* Banner */}
      <Banner heading="Our Location" para="Discover Promise of Spring's prime location in Devanahalli, ensuring easy access to essential amenities, educational institutions, healthcare facilities, and prominent landmarks." bannerImg={locationImg} />

      <section id="nearby" className="common-section">
        <div className="container">
          <div className="nearby-container">
            <h2 className="common-heading-2 inter-semi position-relative">Nearby Sites</h2>
            <div className="site-container">
              <div className="row">
                <div className="col-6">
                  <div className="site-left d-flex flex-column">
                    <div className="site-info d-flex">
                      <img src={plane} alt="plane" className="img-fluid" />
                      <div className="text-color-4">
                        <h3 className="inter-semi common-heading-1">Airport / 21 MIN</h3>
                        <p className="aspekta-reg text-uppercase m-0">Kempegowda International Airport - 21 min</p>
                      </div>
                    </div>
                    <div className="site-info d-flex">
                      <img src={it} alt="it" className="img-fluid" />
                      <div className="text-color-4">
                        <h3 className="inter-semi common-heading-1">IT & Business Hub / 25 MIN</h3>
                        <p className="aspekta-reg text-uppercase m-0">Ecopolis IT Park - 27 min</p>
                        <p className="aspekta-reg text-uppercase m-0">
                          Kirloskar Business Park - 40 min
                        </p>
                        <p className="aspekta-reg text-uppercase m-0">Manyata Tech Park - 40 min</p>
                      </div>
                    </div>
                    <div className="site-info d-flex">
                      <img src={retail} alt="retail" className="img-fluid" />
                      <div className="text-color-4">
                        <h3 className="inter-semi common-heading-1">Retail & Recreation / 15 MIN</h3>
                        <p className="aspekta-reg text-uppercase m-0" >Rigan Restobar - 5 min</p>
                        <p className="aspekta-reg text-uppercase m-0">Olde Bangalore Resort - 24 min</p>
                        <p className="aspekta-reg text-uppercase m-0">
                          Clarks Exotica- 24 min
                        </p>
                        <p className="aspekta-reg text-uppercase m-0">The Galleria Mall - 35 min</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 p-0">
                  <div className="site-right d-flex flex-column">
                    <div className="site-info d-flex">
                      <img src={health} alt="health" className="img-fluid" />
                      <div className="text-color-4">
                        <h3 className="inter-semi common-heading-1">Healthcare / 5 MIN</h3>
                        <p className="aspekta-reg text-uppercase m-0" >Akash Hospital - 15 min</p>
                        <a href="#" className="aspekta-reg text-uppercase m-0">Bangalore Baptist Hospital - 12 min
                        <img src={arrow} alt="arrow" className="arrow img-fluid" />
                        </a>
                        <p className="aspekta-reg text-uppercase m-0">
                        Omega Multispecialty Hospital - 35 min
                        </p>
                        <p className="aspekta-reg text-uppercase m-0">Manipal Northside Hospital - 37 min</p>
                      </div>
                    </div>
                    <div className="site-info d-flex">
                      <img src={school} alt="school" className="img-fluid" />
                      <div className="text-color-4">
                        <h3 className="inter-semi common-heading-1">School / 10 MIN</h3>
                        <p className="aspekta-reg text-uppercase m-0" >EuroKids Pre-School - 10 min</p>
                        <p className="aspekta-reg text-uppercase m-0">Oxford English School - 15 min
                        </p>
                        <p className="aspekta-reg text-uppercase m-0">
                        Nagarjuna College of Engineering - 20 min
                        </p>
                        <p className="aspekta-reg text-uppercase m-0">Harrow International School - 20 min</p>
                      </div>
                    </div>
                    <button className="bg-color-1 site-btn aspekta-reg">VIEW ALL LOCATIONS ON MAP</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="easy-access" className="common-section">
        <div className="container-fluid">
          <div className="easy-container">

          </div>
        </div>
      </section>
    </>
  )
}

export default Location