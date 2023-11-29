import Header from '../Header'
import './index.css'

const About = () => (
  <>
    <Header />
    <div className="about-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
        alt="about"
        className="about-image"
      />
      <h1 className="about-heading">About</h1>
      <p className="about-description">
        I love to create! i am a frontend Web developer
      </p>
    </div>
  </>
)
export default About