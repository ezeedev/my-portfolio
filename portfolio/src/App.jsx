import Hero from './components/Hero/Hero'
import NavBar from './components/Nav/NavBar'
import './index.css'

function App() {

  return (
      <div className="bg-[#17181f] h-screen">
        <div className="container max-w-[1000px] m-auto">

          <Hero />          

          <NavBar />
        </div>
      </div>
  )
}

export default App
