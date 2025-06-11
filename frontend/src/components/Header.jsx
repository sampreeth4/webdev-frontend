"use client"

import { useState, useRef, useEffect } from "react"
import "./Header.scss"

const Header = () => {
  const menuRef = useRef(null);

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
      document.body.style.overflow = ""
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu" ref={menuRef}>
          <div className="mobile-menu-header">
            <div className="logo">
              <span className="logo-icon">🩺</span>
              <span className="logo-text">ProVital</span>
            </div>
            <button className="close-menu-btn" onClick={toggleMenu}>
              ✕
            </button>
          </div>

          <div className="mobile-menu-content">
            <div className="mobile-auth-section">
              <div className="mobile-auth-group">
                <h3>Doctor</h3>
                <div className="mobile-auth-links">
                  <a href="#" className="mobile-login-link">
                    Login
                  </a>
                  <a href="#" className="mobile-signup-link">
                    Sign up
                  </a>
                </div>
              </div>

              <div className="mobile-auth-group">
                <h3>Patients</h3>
                <div className="mobile-auth-links">
                  <a href="#" className="mobile-login-link">
                    Login
                  </a>
                  <a href="#" className="mobile-signup-link">
                    Sign up
                  </a>
                </div>
              </div>
            </div>

            <div className="mobile-nav-links">
              <a href="#" className="mobile-nav-link">
                <span>Doctors</span>
                <span className="arrow">→</span>
              </a>
              <a href="#" className="mobile-nav-link">
                <span>List your practice</span>
                <span className="arrow">→</span>
              </a>
              <a href="#" className="mobile-nav-link">
                <span>For Employers</span>
                <span className="arrow">→</span>
              </a>
              <a href="#" className="mobile-nav-link">
                <span>Courses</span>
                <span className="arrow">→</span>
              </a>
              <a href="#" className="mobile-nav-link">
                <span>Books</span>
                <span className="arrow">→</span>
              </a>
              <a href="#" className="mobile-nav-link">
                <span>Speakers</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
