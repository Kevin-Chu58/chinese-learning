import Home from './views/Home';
import Demo from './views/Demo';

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
    }
]

export default routes;