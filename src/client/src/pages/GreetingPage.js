import Body from "../components/Body";
import GetStarted from "../components/get-started/GetStarted";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const GreetingPage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar/>
            <Body/>
            <GetStarted/>
            <Footer/>
            </header>
        </div>
    );
}

export default GreetingPage;