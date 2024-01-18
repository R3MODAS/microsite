import { useRef } from "react"
import { useState } from "react"
import { useEffect } from "react"
import "../css/amenities.css"
import Isotope from "isotope-layout"
import Banner from "../components/Banner"
import amenities from "../assets/amenities.png"
import basketball from "../assets/basketball.png"
import effect from "../assets/effect.png"
import garden from "../assets/garden.png"
import effect2 from "../assets/effect-2.png"
import petpark from "../assets/petpark.png"
import forest from "../assets/forest.png"
import $ from "jquery"

const Amenities = () => {

  const isotope = useRef()
  const [filterKey, setFilterKey] = useState('*')

  useEffect(() => {
    isotope.current = new Isotope('.main-items', {
      itemSelector: '.main-item',
      masonry: {
        fitWidth: true
      }
    })

    $('.main-btns').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      setFilterKey(filterValue)
      $('.main-btns button').removeClass('active');
      $(this).addClass('active');
    });

    filterKey === '*'
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `${filterKey}` })

    return () => isotope.current.destroy()
  }, [filterKey])


  return (
    <>
      {/* Banner */}
      <Banner heading="Our Amenities" para="Experience a world of comfort and leisure with our array of meticulously designed amenities, offering everything from serene greenspaces to dynamic sporting facilities." bannerImg={amenities} />

      {/* Section 2 */}
      <section id="main-section" className="common-section">
        <div className="container">
          <div className="main-container d-flex flex-column justify-content-center align-items-center">

            <div className="main-btns d-flex justify-content-center align-items-center button-group filters-button-group">
              <button data-filter="*" className="main-btn aspekta-reg active text-uppercase">all</button>
              <button data-filter=".lifestyle"className="main-btn aspekta-reg text-uppercase">lifestyle</button>
              <button data-filter=".sports" className="main-btn aspekta-reg text-uppercase">sports</button>
              <button data-filter=".leisure"className="main-btn aspekta-reg text-uppercase">leisure</button>
            </div>

            <div className="main-items">
              <div className="main-item main-item-1 sports">
                <div className="row">
                  <div className="col-6 order-1">
                    <div className="main-item-left d-flex flex-column">
                      <h2 className="position-relative text-color-3 inter-semi common-heading-1">Basketball Court</h2>
                      <p className="aspekta-reg text-color-10">Shoot some hoops and enjoy friendly matches on our well-maintained basketball court.</p>
                      <img src={effect} alt="effect" className="img-fluid position-absolute effect effect-1" />
                    </div>
                  </div>
                  <div className="col-6 order-2">
                    <div className="main-item-right">
                      <img src={basketball} alt="basketball" className="img-fluid d-block position-relative mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-item main-item-2 lifestyle">
                <div className="row">
                  <div className="col-6 order-2">
                    <div className="main-item-left d-flex flex-column">
                      <h2 className="position-relative text-color-3 inter-semi common-heading-1">Chromatography Garden</h2>
                      <p className="aspekta-reg text-color-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                      <img src={effect2} alt="effect" className="img-fluid position-absolute effect effect-2" />
                    </div>
                  </div>
                  <div className="col-6 order-1">
                    <div className="main-item-right">
                      <img src={garden} alt="garden" className="img-fluid d-block position-relative mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-item main-item-3 leisure">
                <div className="row">
                  <div className="col-6 order-1">
                    <div className="main-item-left d-flex flex-column">
                      <h2 className="position-relative text-color-3 inter-semi common-heading-1">Pet Park</h2>
                      <p className="aspekta-reg text-color-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                      <img src={effect} alt="effect" className="img-fluid position-absolute effect effect-1" />
                    </div>
                  </div>
                  <div className="col-6 order-2">
                    <div className="main-item-right">
                      <img src={petpark} alt="petpark" className="img-fluid d-block position-relative mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-item main-item-4 leisure">
                <div className="row">
                  <div className="col-6 order-2">
                    <div className="main-item-left d-flex flex-column">
                      <h2 className="position-relative text-color-3 inter-semi common-heading-1">The Miyawaki Forest</h2>
                      <p className="aspekta-reg text-color-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                      <img src={effect2} alt="effect" className="img-fluid position-absolute effect effect-2" />
                    </div>
                  </div>
                  <div className="col-6 order-1">
                    <div className="main-item-right">
                      <img src={forest} alt="forest" className="img-fluid d-block position-relative mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-load-btn">
              <button className="loadMoreBtn d-flex justify-content-center align-items-center bg-color-1 main-btn text-uppercase aspekta-reg">Load More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Amenities