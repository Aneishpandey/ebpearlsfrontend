import { memo } from "react"
import "./Logo.css"

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo-icon"></div>
      <span className="logo-text">Logoipsum</span>
    </div>
  )
}

export default memo(Logo)
