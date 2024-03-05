import logo from './logo.svg';
import './App.css';
import Statusbar from './components/Statusbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Campoform from './components/Campoform/Campoform';
import Forms from './components/Forms';

function App() {
  return (
    <div className="App">
      <Statusbar/>
      <Navbar/>
      <Footer/>
      <Forms backgroundColor="#ffce07" color="#000"/>
    </div>
  );
}

export default App;
