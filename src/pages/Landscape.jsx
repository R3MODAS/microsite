import Banner from "../components/Banner"
import effect from "../assets/common-effect.png"
import effect2 from "../assets/common-effect-2.png"
import bannerimg from "../assets/landscapebg.png"
import brownbg from "../assets/brownbg.png"
import space from "../assets/space.svg"
import green from "../assets/green.svg"
import ecosystem from "../assets/ecosystem.svg"
import trees from "../assets/trees.svg"
import species from "../assets/species.svg"
import air from "../assets/air.png"
import health from "../assets/health-concern.svg"
import biodiversity from "../assets/biodiversity.png"
import temperature from "../assets/temperature.png"
import "../css/landscape.css"

const Landscape = () => {
  return (
    <>
      <Banner heading="Our Landscape" para="Explore an expansive green haven, featuring a lush Miyawaki Forest, extensive greenery, numerous trees, and a diverse range of native species at Promise of Spring." bannerImg={bannerimg} />

      <section id="manicured" className="position-relative">
        <img src={brownbg} className="img-fluid brown-bg position-relative" alt="img" />
        <div className="manicured-container position-absolute">
          <div className="container">
            <h2 className="text-white inter-semi common-heading-1">Well-manicured landscape</h2>
            <ul className="position-relative">
              <li>
                <img src={space} alt="space" />
                <h3 className="text-color-11 neue-bold m-0">47%</h3>
                <p className="text-color-12 neue-reg m-0">Open Space</p>
              </li>
              <li>
                <img src={green} alt="green" />
                <h3 className="text-color-11 neue-bold m-0">18%</h3>
                <p className="text-color-12 neue-reg m-0">Green Cover</p>
              </li>
              <li>
                <img src={ecosystem} alt="ecosystem" />
                <h3 className="text-color-11 neue-bold m-0">1 Acre</h3>
                <p className="text-color-12 neue-reg m-0">Regenerative Park</p>
              </li>
              <li>
                <img src={trees} alt="trees" />
                <h3 className="text-color-11 neue-bold m-0">5000+ Trees</h3>
                <p className="text-color-12 neue-reg m-0">Within the Project</p>
              </li>
              <li>
                <img src={species} alt="species" />
                <h3 className="text-color-11 neue-bold m-0">Numerous</h3>
                <p className="text-color-12 neue-reg m-0">Native Species</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="why-trees" className="common-section">
        <div className="container">
          <div className="why-container d-flex flex-column justify-content-center align-items-center">
            <h2 className="inter-semi common-heading-1">What does it mean to live amidst 5000+ trees?</h2>

            <div className="common-items">
              <div className="common-item">
                <div className="row">
                  <div className="col-6 order-1">
                    <div className="common-item-left d-flex flex-column position-relative">
                      <div>
                        <img src={health} alt="health" />
                        <h3 className="text-color-7 inter-semi  common-heading-1">Improved air quality to breathe in health.</h3>
                        <p className="aspekta-reg text-color-10">Abundant greenery in  every corner that improves the air you breathe and enriches the   overall quality of everyday life.</p>
                        <img src={effect} alt="effect" className="common-effect   position-absolute common-effect-1" />
                      </div>
                    </div>
                  </div>
                  <div className="col-6 order-2">
                    <div className="common-item-right">
                      <img src={air} alt="basketball" className="img-fluid d-block position-relative mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="common-item">
                <div className="row">
                  <div className="col-6 order-2">
                    <div className="common-item-left d-flex flex-column position-relative">
                      <div>
                        <img src={health} alt="health" />
                        <h3 className="text-color-7 inter-semi  common-heading-1">Biodiversity that thrives with you.</h3>
                        <p className="aspekta-reg text-color-10">Providing a safe sanctuary for a rich tapestry of diverse and indigenous flora and fauna.</p>
                        <img src={effect2} alt="effect" className="common-effect   position-absolute common-effect-2" />
                      </div>
                    </div>
                  </div>
                  <div className="col-6 order-1">
                    <div className="common-item-right">
                      <img src={biodiversity} alt="biodiversity" className="img-fluid d-block position-relative mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="common-item">
                <div className="row">
                  <div className="col-6 order-1">
                    <div className="common-item-left d-flex flex-column position-relative">
                      <div>
                        <img src={health} alt="health" />
                        <h3 className="text-color-7 inter-semi  common-heading-1">Better temperature regulation all year round.</h3>
                        <p className="aspekta-reg text-color-10">Thousands of trees contributing to air cooling, oxygen generation, and the regulation of precipitation and wind patterns.</p>
                        <img src={effect} alt="effect" className="common-effect   position-absolute common-effect-1" />
                      </div>
                    </div>
                  </div>
                  <div className="col-6 order-2">
                    <div className="common-item-right">
                      <img src={temperature} alt="temperature" className="img-fluid d-block position-relative mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Landscape