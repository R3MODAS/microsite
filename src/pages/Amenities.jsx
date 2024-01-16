import amenities from "../assets/amenities.png"
import Banner from "../components/Banner"

const Amenities = () => {
  return (
    <>
      {/* Banner */}
      <Banner heading="Our Amenities" para= "Experience a world of comfort and leisure with our array of meticulously designed amenities, offering everything from serene greenspaces to dynamic sporting facilities." bannerImg = {amenities} />
      
    </>
  )
}

export default Amenities