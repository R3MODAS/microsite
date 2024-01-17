import { useRef } from "react"
import { useState } from "react"
import { useEffect } from "react"
import Isotope from "isotope-layout"
import Banner from "../components/Banner"
import amenities from "../assets/amenities.png"
import basketball from "../assets/basketball.png"
import effect from "../assets/effect.png"
import "../css/amenities.css"
import garden from "../assets/garden.png"

const Amenities = () => {

  const isotope = useRef()
  const [filterKey, setFilterKey] = useState('*')

  useEffect(() => {
    isotope.current = new Isotope('.main-items', {
      itemSelector : '.main-item',
      masonry : {
        columnWidth : 1000,
        fitWidth : true
      }
    })

    filterKey === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `${filterKey}`})

    return () => isotope.current.destroy()
  }, [filterKey])

  const handleFilterKeyChange = key => () => setFilterKey(key)

  return (
    <>
      {/* Banner */}
      <Banner heading="Our Amenities" para="Experience a world of comfort and leisure with our array of meticulously designed amenities, offering everything from serene greenspaces to dynamic sporting facilities." bannerImg={amenities} />

      {/* Section 2 */}
      <section id="main-section" className="common-section">
        <div className="container">
          <div className="main-container d-flex flex-column justify-content-center align-items-center">

            <div className="main-btns d-flex justify-content-center align-items-center button-group filters-button-group">
              <button onClick={handleFilterKeyChange("*")} className="btn main-btn aspekta-reg bg-color-1 text-uppercase is-checked">all</button>
              <button onClick={handleFilterKeyChange(".lifestyle")} className="btn main-btn aspekta-reg text-uppercase">lifestyle</button>
              <button onClick={handleFilterKeyChange(".sports")} className="btn main-btn aspekta-reg text-uppercase">sports</button>
              <button onClick={handleFilterKeyChange(".leisure")} className="btn main-btn aspekta-reg text-uppercase">leisure</button>
            </div>

            <div className="main-items">
              <div className="main-item sports">
                  <div className="row">
                    <div className="col-6 order-1">
                        <div className="main-item-left d-flex flex-column position-relative">
                          <h2 className="position-relative text-color-3 inter-semi common-heading-1">Basketball Court</h2>
                          <p className="aspekta-reg text-color-10">Shoot some hoops and enjoy friendly matches on our well-maintained basketball court.</p>
                          <img src={effect} alt="effect" className="img-fluid position-absolute effect-1" />
                        </div>
                    </div>
                    <div className="col-6 order-2">
                        <div className="main-item-right">
                          <img src={basketball} alt="basketball" className="img-fluid" />
                        </div>
                    </div>
                  </div>
              </div>
              <div className="main-item lifestyle">
                  <div className="row">
                    <div className="col-6 order-2">
                        <div className="main-item-left d-flex flex-column position-relative">
                          <h2 className="position-relative text-color-3 inter-semi common-heading-1">Basketball Court</h2>
                          <p className="aspekta-reg text-color-10">Shoot some hoops and enjoy friendly matches on our well-maintained basketball court.</p>
                          <img src={effect} alt="effect" className="img-fluid position-absolute effect-1" />
                        </div>
                    </div>
                    <div className="col-6 order-1">
                        <div className="main-item-right">
                          <img src={garden} alt="basketball" className="img-fluid" />
                        </div>
                    </div>
                  </div>
              </div>
              <div className="main-item lifestyle">
                  <div className="row">
                    <div className="col-6 order-2">
                        <div className="main-item-left d-flex flex-column position-relative">
                          <h2 className="position-relative text-color-3 inter-semi common-heading-1">Basketball Court</h2>
                          <p className="aspekta-reg text-color-10">Shoot some hoops and enjoy friendly matches on our well-maintained basketball court.</p>
                          <img src={effect} alt="effect" className="img-fluid position-absolute effect-1" />
                        </div>
                    </div>
                    <div className="col-6 order-1">
                        <div className="main-item-right">
                          <img src={garden} alt="basketball" className="img-fluid" />
                        </div>
                    </div>
                  </div>
              </div>
              <div className="main-item leisure">
                  <div className="row">
                    <div className="col-6 order-2">
                        <div className="main-item-left d-flex flex-column position-relative">
                          <h2 className="position-relative text-color-3 inter-semi common-heading-1">Basketball Court</h2>
                          <p className="aspekta-reg text-color-10">Shoot some hoops and enjoy friendly matches on our well-maintained basketball court.</p>
                          <img src={effect} alt="effect" className="img-fluid position-absolute effect-1" />
                        </div>
                    </div>
                    <div className="col-6 order-1">
                        <div className="main-item-right">
                          <img src={garden} alt="basketball" className="img-fluid" />
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

export default Amenities