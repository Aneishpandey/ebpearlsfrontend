"use client"

import { useState } from "react"
import Logo from "../common/Logo"
import Button from "../common/Button"
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Logo />

        {/* Mobile menu button */}
        <button className="mobile-menu-button" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? "open" : ""}`}></span>
        </button>

        {/* Navigation */}
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#products" className="nav-link">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a href="#solutions" className="nav-link">
                Solutions
              </a>
            </li>
            <li className="nav-item">
              <a href="#help-center" className="nav-link">
                Help center
              </a>
            </li>
            <li className="nav-item">
              <a href="#get-started" className="nav-link">
                Get started
              </a>
            </li>
          </ul>
        </nav>

        {/* CTA Buttons */}
        <div className="header-buttons">
          <a href="/login" className="login-link">
            Login
          </a>
          <Button text="Request a demo" variant="primary" className="demo-button" />
        </div>
      </div>
    </header>
  )
}

export default Header
