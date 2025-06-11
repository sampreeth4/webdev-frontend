"use client"

import { useState } from "react"
import "./HowItWorks.scss"

const pillars = [
  { id: "nutrition", label: "Nutrition" },
  { id: "physical", label: "Physical activity" },
  { id: "sleep", label: "Restorative sleep" },
  { id: "stress", label: "Stress management" },
  { id: "social", label: "Social connection" },
  { id: "substance", label: "Substance abuse" },
]

const allCardData = [
  {
    id: "nutrition",
    title: "Nutrition",
    stat: "121/80",
    unit: "mmHg",
    description:
      "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
    image: "./src/components/images/nutrition.jpg",
    emoji: "💙",
  },
  {
    id: "physical",
    title: "Physical activity",
    stat: "32",
    unit: "minutes",
    description:
      "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
    image: "./src/components/images/women-blacktop.jpg",
    emoji: "❤",
  },
  {
    id: "sleep",
    title: "Restorative sleep",
    stat: "8",
    unit: "hours",
    description: "Consistent, quality sleep supports immune function and physical and mental restoration.",
    image: "./src/components/images/man-sleep.jpg",
    emoji: "🌙",
  },
  {
    id: "stress",
    title: "Stress management",
    stat: "15",
    unit: "minutes",
    description: "Effective stress management techniques help reduce cortisol levels and improve overall well-being.",
    image: "./src/components/images/women-stand.jpg",
    emoji: "💙",
  },
  {
    id: "social",
    title: "Social connection",
    stat: "5",
    unit: "friends",
    description: "Strong social connections are linked to better mental health and increased longevity.",
    image: "./src/components/images/men-smile.jpg",
    emoji: "❤",
  },
  {
    id: "substance",
    title: "Substance abuse",
    stat: "0",
    unit: "drinks",
    description: "Avoiding harmful substances and moderating alcohol intake supports optimal health outcomes.",
    image: "./src/components/images/man-jog.jpg",
    emoji: "⌛",
  },
]

const HowItWorks = () => {
  const [activePillar, setActivePillar] = useState("nutrition")
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + cardsPerView >= allCardData.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, allCardData.length - cardsPerView) : prev - 1))
  }

  const visibleCards = allCardData.slice(currentIndex, currentIndex + cardsPerView)

  // If we don't have enough cards to fill the view, add from the beginning
  if (visibleCards.length < cardsPerView) {
    const remainingCards = allCardData.slice(0, cardsPerView - visibleCards.length)
    visibleCards.push(...remainingCards)
  }

  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <div className="section-header">
          <p className="section-label">HOW IT WORKS</p>
          <div className="section-title-row">
            <h2 className="section-title">
              <span className="highlight">Lifestyle as medicine:</span> The six pillars
            </h2>
            <div className="navigation-arrows">
              <button className="nav-arrow nav-arrow-left" onClick={prevSlide}>
                ←
              </button>
              <button className="nav-arrow nav-arrow-right" onClick={nextSlide}>
                →
              </button>
            </div>
          </div>
        </div>

        <div className="pillars-tabs">
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              className={`pillar-tab ${activePillar === pillar.id ? "active" : ""}`}
              onClick={() => setActivePillar(pillar.id)}
            >
              {pillar.label}
            </button>
          ))}
        </div>

        <div className="cards-carousel">
          <div className="cards-track" style={{ transform: `translateX(0%)` }}>
            {visibleCards.map((card, index) => (
              <div key={`${card.id}-${index}`} className="pillar-card">
                <div className="card-image">
                  <img src={card.image || "/placeholder.svg"} alt={card.title} />
                  <div className="card-stat">
                    <div className="stat-icon">{card.emoji}</div>
                    <div className="stat-value">
                      <span className="stat-number">{card.stat}</span>
                      <span className="stat-unit">{card.unit}</span>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-indicators">
          {Array.from({ length: Math.ceil(allCardData.length / cardsPerView) }).map((_, index) => (
            <button
              key={index}
              className={`indicator ${Math.floor(currentIndex / cardsPerView) === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index * cardsPerView)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
