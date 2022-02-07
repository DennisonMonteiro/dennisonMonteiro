import './App.css';
import About from './views/about/About';
import Navbar from './components/navbar/Navbar';
import Overview from './views/overview/Overview';
import Skills from './views/skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Overview />
      <About title="About"/>
      <Skills title="Skills"/>
    </div>
  );
}

export default App;
