import locationImg from "../assets/location.png"
import Banner from "../components/Banner"

const Location = () => {
  return (
    <>
      {/* Banner */}
      <Banner heading="Our Location" para="Discover Promise of Spring's prime location in Devanahalli, ensuring easy access to essential amenities, educational institutions, healthcare facilities, and prominent landmarks." bannerImg = {locationImg} />
    </>
  )
}

export default Location