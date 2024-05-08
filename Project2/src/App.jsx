import './App.css'
import Box from '../src/components/box_component/Box'
import Box2 from './components/box_component/Box2'
import Content from './components/Content'
import Section from './components/Section'
import Navbar from './components/Navbar'
import OtherCities from './components/OtherCities'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Box/> 
    <Box2/>
    <Content/>
    <Section/>
    <OtherCities />
    <Footer />
    </>
  )
}

export default App
