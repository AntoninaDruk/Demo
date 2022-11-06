import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header/header';
import Oneblock from '../one-block/one-block';
import ColorBlocks from '../colorBlocks-container/colorBlocks-container';

import './app.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/">
                            <Oneblock />
                        </Route>
                        <Route exact path="/learn">
                            <ColorBlocks />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;
