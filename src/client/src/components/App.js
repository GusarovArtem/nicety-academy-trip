import {Route, Routes} from "react-router-dom";
import {AppContextProvider} from "./context/context";
import Header from "./Header";
import Home from "./Home"
import Login from "./Login";
import Registration from "./registration/Registration";
import '../styles/App.css';
import {ConfigProvider} from "antd";
import Activation from "./Activation";
import ResetPassword from "./ResetPassword";
import Footer from "./Footer";
import ClubsList from "./login/ClubsList";
import ClubDetails from "./login/ClubDetails";
import Contest from "./Contest";

function App() {
    return (
        <div className="App">
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '216575',
                    },
                }}
            >
                <AppContextProvider>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/kola-naukowe" element={<ClubsList mode={'all'}/>}/>
                        <Route path="/edycja-kol" element={<ClubsList mode={'users'}/>}/>
                        <Route path="/edycja-kola" element={<Registration/>}/>
                        <Route path="/kolo" element={<ClubDetails/>}/>
                        <Route path="/logowanie" element={<Login/>}/>
                        <Route path="/rejestracja" element={<Registration/>}/>
                        <Route path="/aktywacja" element={<Activation/>}/>
                        <Route path="/resetHaslo" element={<ResetPassword/>}/>
                        <Route path="/konkurs" element={<Contest/>}/>
                    </Routes>
                </AppContextProvider>
                <Footer/>
            </ConfigProvider>
        </div>
    );
}

export default App;