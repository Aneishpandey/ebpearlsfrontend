"use client"

import { memo } from "react"
import PropTypes from "prop-types"
import "./Button.css"

const Button = ({ text, variant = "primary", type = "button", className = "", disabled = false, onClick }) => {
  return (
    <button type={type} className={`button button-${variant} ${className}`} disabled={disabled} onClick={onClick}>
     {text}
    </button>

   
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default memo(Button)
