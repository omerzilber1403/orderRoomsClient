import { React } from "react";
import Modal from "react-modal";
import Calendar from "./Components/Calendar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeScreen, ChooseRoom } from "./Components";

Modal.setAppElement("#root");

function App() {
    return (
        <Router>
            <>
                <Switch>
                    <Route exact path="/">
                        <HomeScreen></HomeScreen>
                    </Route>
                    <Route exact path="/choose-room">
                        <ChooseRoom />
                    </Route>
                    <Route exact path="/calendar">
                        <Calendar />
                    </Route>
                </Switch>
            </>
        </Router>
    );
}

export default App;
