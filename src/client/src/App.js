import './styles/App.css';
import GetStarted from "./components/get-started/GetStarted";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";


function App() {
    return (

        <div className="App">
            <Navbar/>
            <header className="App-header">
                <Body/>
                <GetStarted/>
            </header>
            <Footer/>
        </div>
    );
}

export default App;
