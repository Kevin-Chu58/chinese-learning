import Home from './views/Home';
import Demo from './views/Demo';
import Playground from './views/Playground';
import About from './views/About';

const routes = [
    {
        name: 'Home',
        path: '/',
        element: <Home />,
    },
    {
        name: 'Demo',
        path: '/demo/',
        element: <Demo />,
    },
    {
        name: 'Playground',
        path: '/playground/',
        element: <Playground />,
    },
    {
        name: 'About',
        path: '/about/',
        element: <About />,
    },
]

export default routes;