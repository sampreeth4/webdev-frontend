"use client"

import { useState, useEffect } from "react"
import "./HeroSection.scss"

const HeroSection = () => {
  const [searchData, setSearchData] = useState({
    condition: "",
    location: "",
    insurance: "",
  })
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Images for the carousel
  const leftColumnImages = [
    "./images/column1/img1.jpg",
    "./images/column1/img2.jpg",
    "./images/column1/img3.jpg",
    "./images/column1/img4.jpg",
  ]

  const rightColumnImages = [
    "./images/column2/img1.jpg",
    "./images/column2/img2.jpg",
    "./images/column2/img3.jpg",
    "./images/column2/img4.jpg",
  ]

  const carouselImages = [
    "./images/column1/img1.jpg",
    "./images/column1/img2.jpg",
    "./images/column1/img3.jpg",
    "./images/column1/img4.jpg",
    "./images/column2/img1.jpg",
    "./images/column2/img2.jpg",
    "./images/column2/img3.jpg",
    "./images/column2/img4.jpg",
  ]

  const handleInputChange = (field, value) => {
    setSearchData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSearch = () => {
    console.log("Search data:", searchData)
  }

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          {!isMobile && (
            <div className="hero-images desktop-images">
              <div className="image-carousel">
                <div className="carousel-column left-column">
                  {/* Duplicate images for seamless loop */}
                  {[...leftColumnImages, ...leftColumnImages].map((image, index) => (
                    <div key={`left-${index}`} className="carousel-image">
                      <img src={image || "/placeholder.svg"} alt={`Lifestyle ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <div className="carousel-column right-column">
                  {/* Duplicate images for seamless loop */}
                  {[...rightColumnImages, ...rightColumnImages].map((image, index) => (
                    <div key={`right-${index}`} className="carousel-image">
                      <img src={image || "/placeholder.svg"} alt={`Health ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="hero-text">
            <h1 className="hero-title">
              Book an appointment with <span className="highlight">lifestyle medicine</span> experts
            </h1>
            <p className="hero-subtitle">Optimize your lifestyle and reverse chronic diseases.</p>
          </div>
        </div>

        {/* Search form */}
        <div className="search-container">
          <div className="search-form">
            <div className="search-field">
              <input
                type="text"
                placeholder="Condition, procedure, specialty..."
                value={searchData.condition}
                onChange={(e) => handleInputChange("condition", e.target.value)}
                className="search-input"
              />
            </div>
            <div className="search-field">
              <input
                type="text"
                placeholder="City, state, or zipcode"
                value={searchData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                className="search-input"
              />
            </div>
            <div className="search-field">
              <input
                type="text"
                placeholder="Insurance carrier"
                value={searchData.insurance}
                onChange={(e) => handleInputChange("insurance", e.target.value)}
                className="search-input"
              />
            </div>
            <button onClick={handleSearch} className="search-btn">
              Find now
            </button>
          </div>
        </div>

        {/* Mobile horizontal image carousel */}
        {isMobile && (
          <div className="mobile-carousel">
            <div className="mobile-carousel-track">
              {[...carouselImages, ...carouselImages].map((image, index) => (
                <div key={`mobile-${index}`} className="mobile-carousel-item">
                  <img src={image || "/placeholder.svg"} alt={`Lifestyle ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection
