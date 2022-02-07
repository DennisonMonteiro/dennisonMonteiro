import './App.css';
import About from './views/about/About';
import Navbar from './components/navbar/Navbar';
import Overview from './views/overview/Overview';
import Skills from './views/skills/Skills';
import Projects from './views/projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Overview />
      <About title="About"/>
      <Skills title="Skills"/>
      <Projects title="Projects"/>
    </div>
  );
}

export default App;
