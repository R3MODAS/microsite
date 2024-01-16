import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import { Amenities, Contact, Gallery, Home, Landscape, Location, MasterPlan } from "./pages"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/masterplan" element={<MasterPlan />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/location" element={<Location />} />
        <Route path="/landscape" element={<Landscape />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
