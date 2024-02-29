import './App.css';
import Navbar from './components/section/Navbar';
import Presentation from './components/section/Presentation';
import Project from './components/section/Projects';
import Skills from './components/section/Skills';
import Footer from './components/section/Footer';

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App
