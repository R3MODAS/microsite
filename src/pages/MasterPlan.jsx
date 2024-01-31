import Banner from "../components/Banner"
import { entryPointsOne, entryPointsTwo, plots } from "../utils/constants"
import masterplan from "../assets/masterplan.png"
import structure from "../assets/structure.png"
import plotbg from "../assets/plot-bg.png"
import plotmap from "../assets/plot-map.png"
import road9m from "../assets/9m-road.svg"
import road12m from "../assets/12m-road.svg"
import radar from "../assets/radar.svg"
import plotentry from "../assets/plot-entry.svg"
import landscape from "../assets/landscape.svg"
import chamber from "../assets/chamber.svg"
import drip from "../assets/drip.svg"
import energy from "../assets/energy.svg"
import walkway from "../assets/walkway.svg"
import "../css/masterplan.css"

const MasterPlan = () => {
  return (
    <>
      {/* Banner */}
      <Banner heading="Our Masterplan" para="Experience a new standard of living with our meticulously crafted community, blending lush green spaces and innovative design for unparalleled modern living." bannerImg={masterplan} />

      {/* Structure */}
      <section id="masterplan" className="common-section">
        <div className="container">
          <div className="structure position-relative">
            <div className="row">
              <div className="col-6">
                <div className="structure-left">
                  <h2 className="common-heading-1 text-color-3 inter-semi">Our Masterplan</h2>
                  <div className="entry-points">
                    <div className="row">
                      <div className="col-6">
                        <ul className="entry-left p-0 m-0">
                          {
                            entryPointsOne.map(entrypoint => (
                              <li key={entrypoint.id} className="text-uppercase">
                                {
                                  entrypoint.id === 1 ? <>
                                    <div className="square bg-color-2 text-white aspekta-reg">{entrypoint.id}</div>
                                    <span className="text-color-5 inter-semi">{entrypoint.title}</span>

                                  </> : <>
                                    <div className="square bg-color-3 text-white aspekta-reg">{entrypoint.id}</div>
                                    <span className="inter-semi text-color-6">{entrypoint.title}</span>
                                  </>
                                }

                              </li>
                            ))
                          }
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul className="entry-right p-0 m-0">
                          {
                            entryPointsTwo.map(entrypoint => (
                              <li key={entrypoint.id} className="text-uppercase">
                                <div className="square bg-color-3 text-white aspekta-reg">{entrypoint.id}</div>
                                <span className="inter-semi text-color-6">{entrypoint.title}</span>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="structure-right">
                  <img src={structure} alt="structure" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plot Configuration */}
      <section id="plot" className="position-relative">
        <img src={plotbg} alt="img" className="img-fluid" />
        <div className="plot-configuration position-absolute">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="plot-configuration-left">
                  <h2 className="common-heading-1 text-white inter-semi">
                    Plot Configurations
                  </h2>
                  <p className="aspekta-reg text-color-4 common-p">
                    Discover various plot configurations to suit your preferences and needs. From generous plot sizes to pricing details, find the ideal canvas for your dream home.
                  </p>
                  <ul className="structure-data p-0">
                    {
                      plots.map(plot => (
                        <div key={plot.id}>
                          {
                            plot.id === 1 ?
                              <>
                                <li className="active aspekta-reg">
                                  <div className="structure-data-left">
                                    <p>{plot.size}</p>
                                  </div>
                                  <div className="structure-data-right">
                                    <p>{plot.price}</p>
                                  </div>
                                </li>
                              </> : <>
                                <li className="aspekta-reg">
                                  <div className="structure-data-left">
                                    <p>{plot.size}</p>
                                  </div>
                                  <div className="structure-data-right">
                                    <p>{plot.price}</p>
                                  </div>
                                </li>
                              </>
                          }

                        </div>

                      ))
                    }
                  </ul>
                </div>
              </div>
              <div className="col-6">
                <div className="plot-configuration-right">
                  <img src={plotmap} alt="plot" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Road Design */}
      <section id="design" className="position-relative">
        <div className="container">
          <div className="design-container">
            <h2 className="common-heading-1 inter-semi text-color-3">Road Design</h2>

            <div className="road-length-container">
              <div className="road-info" >
                <div className="road-top">
                  <img src={road9m} alt="road" className="img-fluid" />
                  <h3 className="text-color-3 aspekta-semi m-0">9M Road</h3>
                </div>
                <div className="road-mid">
                  <img src={radar} alt="radar" className="img-fluid" />
                  <h4 className="text-color-7 aspekta-med m-0">Vehicular Movement</h4>
                </div>
                <div className="road-bottom">
                  <p className="text-color-8 aspekta-thin">~5.75-meter-wide concrete driveway accommodating two-way vehicular movement.</p>
                </div>
              </div>
              <div className="road-info" >
                <div className="road-top">
                  <img src={road12m} alt="road" className="img-fluid" />
                  <h3 className="text-color-3 aspekta-semi m-0">12M Road</h3>
                </div>
                <div className="road-mid">
                  <img src={radar} alt="radar" className="img-fluid" />
                  <h4 className="text-color-7 aspekta-med m-0">Vehicular Movement</h4>
                </div>
                <div className="road-bottom">
                  <p className="text-color-8 aspekta-thin">~7.5-meter-wide concrete driveway accommodating two-way vehicular movement along with ample space for one car to be parked.</p>
                </div>
              </div>
            </div>

            <div className="plot-info-container">
              <ul className="plot-info m-0 px-0">
                <li>
                  <div className="plot-info-img bg-color-4">
                    <img src={plotentry} alt="plot-entry" className="img-fluid small-img" />
                  </div>
                  <div className="plot-info-text">
                    <h3 className="aspekta-semi text-color-7 common-heading-2">Plot Entry</h3>
                    <p className="aspekta-thin text-color-8">A dedicated 4-meter-wide entry to each plot, meticulously designed for effortless access.</p>
                  </div>
                </li>
                <li>
                  <div className="plot-info-img bg-color-5">
                    <img src={landscape} alt="plot-entry" className="img-fluid" />
                  </div>
                  <div className="plot-info-text">
                    <h3 className="aspekta-semi text-color-7 common-heading-2">Three Tired Landscape</h3>
                    <p className="aspekta-thin text-color-8">Aesthetically designed three-tiered landscape that seamlessly blends tall and low shrubs along with a tree for a touch of nature right at your doorstep.</p>
                  </div>
                </li>
                <li>
                  <div className="plot-info-img bg-color-6">
                    <img src={chamber} alt="plot-entry" />
                  </div>
                  <div className="plot-info-text">
                    <h3 className="aspekta-semi text-color-7 common-heading-2">Chamber - Free Driveway</h3>
                    <p className="aspekta-thin text-color-8">All chambers are planned below walkways or landscape areas.</p>
                  </div>
                </li>
              </ul>
              <ul className="plot-info m-0 px-0">
                <li>
                  <div className="plot-info-img bg-color-7">
                    <img src={walkway} alt="plot-entry" className="img-fluid small-img" />
                  </div>
                  <div className="plot-info-text">
                    <h3 className="aspekta-semi text-color-7 common-heading-2">Seamless Walkways</h3>
                    <p className="aspekta-thin text-color-8">Walkways are designed to ensure seamless walking by minimizing level differences at regular intervals.</p>
                  </div>
                </li>
                <li>
                  <div className="plot-info-img bg-color-8">
                    <img src={energy} alt="plot-entry" className="img-fluid" />
                  </div>
                  <div className="plot-info-text">
                    <h3 className="aspekta-semi text-color-7 common-heading-2">Energy Efficient Lighting</h3>
                    <p className="aspekta-thin text-color-8">A combination of solar-powered and electrical streetlights planned at regular intervals.</p>
                  </div>
                </li>
                <li>
                  <div className="plot-info-img bg-color-9">
                    <img src={drip} alt="plot-entry" />
                  </div>
                  <div className="plot-info-text">
                    <h3 className="aspekta-semi text-color-7 common-heading-2">Drip Irrigation</h3>
                    <p className="aspekta-thin text-color-8">Drip irrigation system for hassle-free landscape maintenance.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default MasterPlan