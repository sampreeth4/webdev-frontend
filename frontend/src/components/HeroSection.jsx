"use client"

import { useState } from "react"
import "./HeroSection.scss"

const HeroSection = () => {
  const [searchData, setSearchData] = useState({
    condition: "",
    location: "",
    insurance: "",
  })

  // Images for the carousel
  const leftColumnImages = [
    "./src/components/images/column1/img1.jpg",
    "./src/components/images/column1/img2.jpg",
    "./src/components/images/column1/img3.jpg",
    "./src/components/images/column1/img4.jpg",
    // "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=400&fit=crop",
  ]

  const rightColumnImages = [
    "./src/components/images/column2/img1.jpg",
    "./src/components/images/column2/img2.jpg",
    "./src/components/images/column2/img3.jpg",
    "./src/components/images/column2/img4.jpg",
    // "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=250&fit=crop",
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
          <div className="hero-images">
            <div className="image-carousel">
              <div className="carousel-column left-column">
                {/* Duplicate images for seamless loop */}
                {[...leftColumnImages, ...leftColumnImages].map((image, index) => (
                  <div key={index} className="carousel-image">
                    <img src={image || "/placeholder.svg"} alt={`Lifestyle ${index + 1}`} />
                  </div>
                ))}
              </div>
              <div className="carousel-column right-column">
                {/* Duplicate images for seamless loop */}
                {[...rightColumnImages, ...rightColumnImages].map((image, index) => (
                  <div key={index} className="carousel-image">
                    <img src={image || "/placeholder.svg"} alt={`Health ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-text">
            <h1 className="hero-title">
              Book an appointment with <span className="highlight">lifestyle medicine</span> experts
            </h1>
            <p className="hero-subtitle">Optimize your lifestyle and reverse chronic diseases.</p>
          </div>
        </div>

        {/* Search form overlaid on the entire hero section */}
        <div className="search-overlay">
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
      </div>
    </section>
  )
}

export default HeroSection
