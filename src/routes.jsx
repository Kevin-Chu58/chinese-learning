import Home from './views/Home';
import Demo from './views/Demo';
import Playground from './views/Playground';
import About from './views/About';
import Founder from './views/Founder';

const routes = [
    {
        name: 'About',
        path: '/about/',
        element: <About />,
    },
    {
        name: 'Demo',
        path: '/demo/',
        element: <Demo />,
    },
    {
        name: 'Founder',
        path: '/founder/',
        element: <Founder />,
    },
    {
        name: 'Home',
        path: '/',
        element: <Home />,
    },
    {
        name: 'Playground',
        path: '/playground/',
        element: <Playground />,
    },
]

export default routes;