import "assets/css/all.css"
import "assets/css/container.css"
import "./style.css"
import Button from "components/buttons"



const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-about'>
          <div className='container'>
            <div className='hero-tdb'>
              <h1 className='hero-title'>The ultimate convenience for busy people</h1>
              <p className='hero-desc'>Experience the Convenience of In-Home Barber Services</p>

              <div className="hero-button">
                  <Button className="book-btn" title={"Book an Appointment"}/>

                  <Button className="secondary-btn" title={"Browse services"} />
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default Hero