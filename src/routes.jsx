import Home from './views/Home';
import Demo from './views/Demo';
import Playground from './views/Playground';
import About from './views/About';
import Founder from './views/Founder';

const routes = [
    {
        name: 'Home',
        path: '/',
        element: <Home />,
    },
    {
        name: 'About',
        path: '/about',
        element: <About />,
    },
    {
        name: 'Founder',
        path: '/founder',
        element: <Founder />,
    },
    {
        name: 'Demo',
        path: '/demo',
        element: <Demo />,
    },
    {
        name: 'Playground',
        path: '/playground',
        element: <Playground />,
    },
]

export default routes;