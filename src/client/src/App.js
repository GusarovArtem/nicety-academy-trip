import './styles/App.css';
import GetStarted from "./components/get-started/GetStarted";
import Header from "./components/Header";
import Body from "./components/Body";


function App() {
    return (

        <div className="App">
            <Header/>
            <header className="App-header">
                <Body/>
                <GetStarted/>
            </header>
        </div>
    );
}

export default App;
