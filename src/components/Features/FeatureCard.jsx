import PropTypes from "prop-types"
import "./FeatureCard.css"

const FeatureCard = ({ title, description, iconPath }) => {
  return (
    <div className="feature-card">
      
        <img src={iconPath || "/placeholder.svg"} alt={title} className="feature-icon" />
      
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  )
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired,
}

export default FeatureCard
