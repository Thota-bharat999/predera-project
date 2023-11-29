import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
        alt="home"
        className="home-img"
      />
      <h1 className="home-title">Home</h1>
    </div>
  </>
)
export default Home
