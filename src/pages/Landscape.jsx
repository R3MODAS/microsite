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
import water from "../assets/water.png"
import scene from "../assets/scene.png"
import social from "../assets/social.png"
import brownbg2 from "../assets/plot-bg.png"
import cartree from "../assets/car-tree.png"
import road9m from "../assets/9m-road.svg"
import road12m from "../assets/12m-road.svg"
import radar from "../assets/radar.svg"
import plotentry from "../assets/plot-entry.svg"
import landscape from "../assets/landscape.svg"
import chamber from "../assets/chamber.svg"
import drip from "../assets/drip.svg"
import energy from "../assets/energy.svg"
import walkway from "../assets/walkway.svg"

import "../css/landscape.css"

const Landscape = () => {
  return (
    <>
      <Banner heading="Our Landscape" para="Explore an expansive green haven, featuring a lush Miyawaki Forest, extensive greenery, numerous trees, and a diverse range of native species at Promise of Spring." bannerImg={bannerimg} />

      <section id="manicured" className="position-relative">
        <img src={brownbg} className="img-fluid brown-bg position-relative" alt="img" loading="lazy"/>
        <div className="manicured-container position-absolute">
          <div className="container">
            <h2 className="text-white inter-semi common-heading-1">Well-manicured landscape</h2>
            <ul className="position-relative">
              <li>
                <img src={space} alt="space" loading="lazy"/>
                <h3 className="text-color-11 neue-bold m-0">47%</h3>
                <p className="text-color-12 neue-reg m-0">Open Space</p>
              </li>
              <li>
                <img src={green} alt="green" loading="lazy"/>
                <h3 className="text-color-11 neue-bold m-0">18%</h3>
                <p className="text-color-12 neue-reg m-0">Green Cover</p>
              </li>
              <li>
                <img src={ecosystem} alt="ecosystem" loading="lazy"/>
                <h3 className="text-color-11 neue-bold m-0">1 Acre</h3>
                <p className="text-color-12 neue-reg m-0">Regenerative Park</p>
              </li>
              <li>
                <img src={trees} alt="trees" loading="lazy"/>
                <h3 className="text-color-11 neue-bold m-0">5000+ Trees</h3>
                <p className="text-color-12 neue-reg m-0">Within the Project</p>
              </li>
              <li>
                <img src={species} alt="species" loading="lazy"/>
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
                        <img src={health} alt="health" loading="lazy"/>
                        <h3 className="text-color-7 inter-semi  common-heading-1">Improved air quality to breathe in health.</h3>
                        <p className="aspekta-reg text-color-10">Abundant greenery in  every corner that improves the air you breathe and enriches the   overall quality of everyday life.</p>
                        <img src={effect} alt="effect" className="position-absolute common-effect-1" loading="lazy"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 order-2">
                    <div className="common-item-right">
                      <img src={air} alt="basketball" className="img-fluid d-block position-relative mx-auto" loading="lazy"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="common-item">
                <div className="row">
                  <div className="col-6 order-2">
                    <div className="common-item-left d-flex flex-column position-relative">
                      <div>
                        <img src={health} alt="health" loading="lazy"/>
                        <h3 className="text-color-7 inter-semi  common-heading-1">Biodiversity that thrives with you.</h3>
                        <p className="aspekta-reg text-color-10">Providing a safe sanctuary for a rich tapestry of diverse and indigenous flora and fauna.</p>
                        <img src={effect2} alt="effect" className="position-absolute common-effect-2" loading="lazy"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 order-1">
                    <div className="common-item-right">
                      <img src={biodiversity} alt="biodiversity" className="img-fluid d-block position-relative mx-auto" loading="lazy"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="common-item">
                <div className="row">
                  <div className="col-6 order-1">
                    <div className="common-item-left d-flex flex-column position-relative">
                      <div>
                        <img src={health} alt="health" loading="lazy"/>
                        <h3 className="text-color-7 inter-semi  common-heading-1">Better temperature regulation all year round.</h3>
                        <p className="aspekta-reg text-color-10">Thousands of trees contributing to air cooling, oxygen generation, and the regulation of precipitation and wind patterns.</p>
                        <img src={effect} alt="effect" className="position-absolute common-effect-1" loading="lazy"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 order-2">
                    <div className="common-item-right">
                      <img src={temperature} alt="temperature" className="img-fluid d-block position-relative mx-auto" loading="lazy"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="common-item">
                <div className="row">
                  <div className="col-6 order-2">
                    <div className="common-item-left d-flex flex-column position-relative">
                      <div>
                        <img src={health} alt="health" loading="lazy"/>
                        <h3 className="text-color-7 inter-semi  common-heading-1">Water conservation for a more sustainable future.</h3>
                        <p className="aspekta-reg text-color-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <img src={effect2} alt="effect" className="position-absolute common-effect-2" loading="lazy"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 order-1">
                    <div className="common-item-right">
                      <img src={water} alt="water" className="img-fluid d-block position-relative mx-auto" loading="lazy"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="common-item">
                <div className="row">
                  <div className="col-6 order-1">
                    <div className="common-item-left d-flex flex-column position-relative">
                      <div>
                        <img src={health} alt="health" loading="lazy"/>
                        <h3 className="text-color-7 inter-semi  common-heading-1">Scenic views in every direction.</h3>
                        <p className="aspekta-reg text-color-10">Thoughtfully curated landscape, designed to host large trees and provide ample space for plantation.</p>
                        <img src={effect} alt="effect" className="position-absolute common-effect-1" loading="lazy"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 order-2">
                    <div className="common-item-right">
                      <img src={scene} alt="scene" className="img-fluid d-block position-relative mx-auto" loading="lazy"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="common-item">
                <div className="row">
                  <div className="col-6 order-2">
                    <div className="common-item-left d-flex flex-column position-relative">
                      <div>
                        <img src={health} alt="health" loading="lazy"/>
                        <h3 className="text-color-7 inter-semi  common-heading-1">Social gathering spaces immersed in nature.</h3>
                        <p className="aspekta-reg text-color-10">Recreational spaces for people of all ages, encouraging a diverse community with wellness choices for everyone.</p>
                        <img src={effect2} alt="effect" className="position-absolute common-effect-2" loading="lazy"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 order-1">
                    <div className="common-item-right">
                      <img src={social} alt="social" className="img-fluid d-block position-relative mx-auto" loading="lazy"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="easy-traffic" className="position-relative">
        <img src={brownbg2} alt="bg" className="img-fluid" loading="lazy"/>
        <div className="container">
          <div className="easy-container">
            <h2 className="inter-semi text-white position-relative common-heading-1">Easy Movement, Improved Living.</h2>
            <p className="text-color-4 aspekta-reg common-p big-desc">Enjoy seamless traffic, ample parking, and easy access with well-planned 15m, 12m, and 9m wide internal roads, enhancing safety and effortless movement within the community.</p>
            <p className="small-desc aspekta-reg">A dedicated 4-meter-wide entry to each plot, meticulously designed for effortless access.</p>
          </div>
        </div>
        <img src={cartree} alt="car-tree" className="img-fluid position-absolute car-tree-img" loading="lazy"/>
      </section>

      <section id="design" className="common-section position-relative">
        <div className="container">
          <div className="design-container">
            <h2 className="common-heading-1 inter-semi text-color-3 position-relative">Road Design</h2>

            <div className="road-length-container">
              <div className="road-info" >
                <div className="road-top">
                  <img src={road9m} alt="road" className="img-fluid" loading="lazy"/>
                  <h3 className="text-color-3 aspekta-semi m-0">9M Road</h3>
                </div>
                <div className="road-mid">
                  <img src={radar} alt="radar" className="img-fluid" loading="lazy"/>
                  <h4 className="text-color-7 aspekta-med m-0">Vehicular Movement</h4>
                </div>
                <div className="road-bottom">
                  <p className="text-color-8 aspekta-thin">~5.75-meter-wide concrete driveway accommodating two-way vehicular movement.</p>
                </div>
              </div>
              <div className="road-info" >
                <div className="road-top">
                  <img src={road12m} alt="road" className="img-fluid" loading="lazy"/>
                  <h3 className="text-color-3 aspekta-semi m-0">12M Road</h3>
                </div>
                <div className="road-mid">
                  <img src={radar} alt="radar" className="img-fluid" loading="lazy"/>
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
                    <img src={plotentry} alt="plot-entry" className="img-fluid small-img" loading="lazy"/>
                  </div>
                  <div className="plot-info-text">
                    <h3 className="aspekta-semi text-color-7 common-heading-2">Plot Entry</h3>
                    <p className="aspekta-thin text-color-8">A dedicated 4-meter-wide entry to each plot, meticulously designed for effortless access.</p>
                  </div>
                </li>
                <li>
                  <div className="plot-info-img bg-color-10">
                    <img src={landscape} alt="plot-entry" className="img-fluid" loading="lazy"/>
                  </div>
                  <div className="plot-info-text">
                    <h3 className="aspekta-semi text-color-7 common-heading-2">Three Tired Landscape</h3>
                    <p className="aspekta-thin text-color-8">Aesthetically designed three-tiered landscape that seamlessly blends tall and low shrubs along with a tree for a touch of nature right at your doorstep.</p>
                  </div>
                </li>
                <li>
                  <div className="plot-info-img bg-color-6">
                    <img src={chamber} alt="plot-entry" loading="lazy"/>
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
                    <img src={walkway} alt="plot-entry" className="img-fluid small-img" loading="lazy"/>
                  </div>
                  <div className="plot-info-text">
                    <h3 className="aspekta-semi text-color-7 common-heading-2">Seamless Walkways</h3>
                    <p className="aspekta-thin text-color-8">Walkways are designed to ensure seamless walking by minimizing level differences at regular intervals.</p>
                  </div>
                </li>
                <li>
                  <div className="plot-info-img bg-color-8">
                    <img src={energy} alt="plot-entry" className="img-fluid" loading="lazy"/>
                  </div>
                  <div className="plot-info-text">
                    <h3 className="aspekta-semi text-color-7 common-heading-2">Energy Efficient Lighting</h3>
                    <p className="aspekta-thin text-color-8">A combination of solar-powered and electrical streetlights planned at regular intervals.</p>
                  </div>
                </li>
                <li>
                  <div className="plot-info-img bg-color-9">
                    <img src={drip} alt="plot-entry" loading="lazy"/>
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

export default Landscape