import './App.css';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Experience></Experience>
      <Education></Education>
    </div>

  );
}

export default App;
