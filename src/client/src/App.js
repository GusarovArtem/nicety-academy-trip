import './styles/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import GreetingPage from "./pages/GreetingPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
    return (
        <Router>
                <Switch>
                    <Route path="/user/register" component={RegisterPage} />
                    <Route path="/user/login" component={LoginPage} />
                    <Route path="/" component={GreetingPage} />
                </Switch>
        </Router>
    );
}

export default App;
