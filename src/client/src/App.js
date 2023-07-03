<<<<<<< HEAD
import logo from './assets/logo.svg';
import './styles/App.css';
import GetStarted from "./components/get-started/GetStarted";
=======
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
>>>>>>> origin/master

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
<<<<<<< HEAD
        <GetStarted/>
=======
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
>>>>>>> origin/master
      </header>
      <Footer/>

    </div>
  );
}

export default App;
