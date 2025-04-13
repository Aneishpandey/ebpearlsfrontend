import { memo } from "react"
import Button from "../common/Button"
import heroRings from '../../assets/heroimage.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Get instant cash flow with invoice factoring</h1>
          <p className="hero-subtitle">Why wait? Get same day funding and a faster way to access cash flow.</p>
          <Button text="Get started" variant="secondary" className="hero-button" />
          <div className="hero-indicators">
            <span className="indicator active"></span>
            <span className="indicator"></span>
            <span className="indicator"></span>
          </div>
        </div>
        </div>
        <div className="hero-image">
          {/* Half-ring image will be added by the user */}
          <img src={heroRings || "/placeholder.svg"} alt="Decorative rings" className="hero-rings" />
        </div>
      {/* </div> */}
    </section>
  )
}

export default memo(Hero)
