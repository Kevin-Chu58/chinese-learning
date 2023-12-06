import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import { useState } from "react";
import Header from './components/Header';
import Sidebar from './Sidebar.jsx';

const App = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    const onSidebarToggle = () => {
        setShowSidebar(!showSidebar);
        console.log('a');
    };

    return (
        <div className="app">
            <Header onClick={() => onSidebarToggle()} hidden={!showSidebar} />

            <div className="app-container">
                {/* <div className="sidebar-container">
                    <Sidebar />
                </div> */}

                <div className="main-container">
                    
                    <main>
                        <Router>
                            <Routes>
                                {routes.map((route) => (
                                    <Route
                                        key={route.path}
                                        path={route.path}
                                        element={route.element}
                                    />
                                ))}
                            </Routes>
                        </Router>
                    </main>

                    {/* <footer>
                        <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
                    </footer> */}
                </div>
            </div>
        </div>
        
    );
};

export default App;
