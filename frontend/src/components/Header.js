"use client"

import { useState } from "react"
import "./Header.scss"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🏥</span>
            <span className="logo-text">ProVital</span>
          </div>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <a href="#" className="nav-link">
              List your practice
            </a>
            <a href="#" className="nav-link">
              For Employers
            </a>
            <a href="#" className="nav-link">
              Courses
            </a>
            <a href="#" className="nav-link">
              Books
            </a>
            <a href="#" className="nav-link">
              Speakers
            </a>
            <a href="#" className="nav-link">
              Doctors
            </a>
          </nav>

          <div className="auth-section">
            <span className="patients-text">Patients</span>
            <a href="#" className="login-link">
              Login
            </a>
            <a href="#" className="signup-link">
              Sign up
            </a>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
