import { Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import DashBoardPage from './pages/DashBoardPage';

function App() {
    return (
        <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/home" component={HomePage} />
            <Route path="/dashboard" component={DashBoardPage} />
        </Switch>
    )
}

export default App
