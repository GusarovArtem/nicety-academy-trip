import './styles/App.css';
import GetStarted from "./components/get-started/GetStarted";
import logo from './assets/logo.svg';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <GetStarted/>
            </header>
        </div>
    );
}

export default App;
