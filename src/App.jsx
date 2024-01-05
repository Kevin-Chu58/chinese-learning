import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import { createBrowserHistory } from "history";
import { useRef } from "react";
import Header from "./components/Header";

const App = () => {
    const historyRef = useRef(createBrowserHistory());

    return (
        <div className="app">
            <Header isSwitchOn={window.location.href.endsWith("/en")} />

            <div className="main-container">
                <main id="main">
                    <Router historyRef={historyRef.current}>
                        <Routes>
                            {routes.map((route) => (
                                <Route
                                    key={`${route.path}`}
                                    path={route.path}
                                    element={route.element}
                                />
                            ))}
                        </Routes>
                    </Router>
                </main>
            </div>
        </div>
    );
};

export default App;
