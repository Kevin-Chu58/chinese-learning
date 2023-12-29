import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import { createBrowserHistory } from 'history';
import { useState, useRef } from "react";
import Header from './components/Header';

const App = () => {
    const [showSidebar, setShowSidebar] = useState(true);
    const historyRef = useRef(createBrowserHistory());

    const onSidebarToggle = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="app">
            <Header onClick={() => onSidebarToggle()} hidden={!showSidebar} />

            <div className="app-container">

                <div className="main-container">
                    
                    
                        <Router historyRef={historyRef.current}>
                            <main>
                            <Routes>
                                {routes.map((route) => (
                                    <Route
                                        key={route.path}
                                        path={route.path}
                                        element={route.element}
                                    />
                                ))}
                            </Routes>
                            </main>
                        </Router>

                    {/* <footer>
                        <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
                    </footer> */}
                </div>
            </div>

            
        </div>
        
    );
};

export default App;
