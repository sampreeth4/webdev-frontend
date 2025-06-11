"use client"

import { useState, useRef, useEffect } from "react"
import "./Header.scss"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleAuthDropdown = () => {
    setIsAuthDropdownOpen(!isAuthDropdownOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAuthDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🩺</span>
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

          <div className="auth-section" ref={dropdownRef}>
            <button className="auth-btn" onClick={toggleAuthDropdown}>
              Login / Sign up
              <span className={`dropdown-arrow ${isAuthDropdownOpen ? "open" : ""}`}>▼</span>
            </button>

            {isAuthDropdownOpen && (
              <div className="auth-dropdown">
                <div className="dropdown-section">
                  <h4>For Doctors</h4>
                  <a href="#" className="dropdown-link">
                    Doctor Login
                  </a>
                  <a href="#" className="dropdown-link">
                    Doctor Sign up
                  </a>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-section">
                  <h4>For Patients</h4>
                  <a href="#" className="dropdown-link">
                    Patient Login
                  </a>
                  <a href="#" className="dropdown-link">
                    Patient Sign up
                  </a>
                </div>
              </div>
            )}
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
