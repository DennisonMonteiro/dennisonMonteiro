import './App.css';
import About from './views/about/About';
import Navbar from './components/navbar/Navbar';
import Overview from './views/overview/Overview';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Overview />
      <About title="About"/>
    </div>
  );
}

export default App;
