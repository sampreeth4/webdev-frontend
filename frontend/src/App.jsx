import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks"
import "./App.scss"

function App() {
  return (
    <div className="App">
      {/* <img src= '' alt="nutrition" /> */}
      <Header />
      <HeroSection />
      <HowItWorks />
    </div>
  )
}

export default App
