import './styles/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import GreetingPage from "./pages/GreetingPage";
import SignupPage from "./pages/SignupPage";

function App() {
    return (
        <Router>
                <Switch>
                    <Route path="/auth/signup" component={SignupPage} />
                    <Route path="/auth/login" component={LoginPage} />
                    <Route path="/" component={GreetingPage} />
                </Switch>
        </Router>
    );
}

export default App;
