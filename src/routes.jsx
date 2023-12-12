import Home from './views/Home';
import Demo from './views/Demo';
import Playground from './views/Playground';

const routes = [
    {
        name: 'Home',
        path: '/',
        element: <Home />,
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