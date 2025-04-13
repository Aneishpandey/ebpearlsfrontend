"use client"

import { useState, memo } from "react"
import Button from "../common/Button"
import logoImage from "../../assets/logo.png"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* Logo will be added by the user */}
          <img src={logoImage || "/placeholder.svg"} alt="Logoipsum" className="logo-image" />
        </div>

        {/* Mobile menu button */}
        <button className="navbar-menu-button" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? "open" : ""}`}></span>
        </button>

        {/* Navigation links */}
        <nav className={`navbar-nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="navbar-nav-list">
            <li className="navbar-nav-item">
              <a href="#products" className="navbar-nav-link">
                Products
              </a>
            </li>
            <li className="navbar-nav-item">
              <a href="#solutions" className="navbar-nav-link">
                Solutions
              </a>
            </li>
            <li className="navbar-nav-item">
              <a href="#help-center" className="navbar-nav-link">
                Help center
              </a>
            </li>
            <li className="navbar-nav-item">
              <a href="#get-started" className="navbar-nav-link">
                Get started
              </a>
            </li>
          </ul>
        </nav>

        {/* CTA buttons */}
        <div className="navbar-cta">
          <a href="/login" className="navbar-login-link">
            Login
          </a>
          
          <Button text="Request a demo" variant="primary"  />
        </div>
      </div>
    </header>
  )
}

export default memo(Navbar)
