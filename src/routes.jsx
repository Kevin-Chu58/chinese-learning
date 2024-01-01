import Home from './views/Home';
import Demo from './views/Demo';
import Playground from './views/Playground';
import Founder from './views/Founder';
import Introduction from './views/Introduction';
import TwentyYears from './views/TwentyYears';
import Principle from './views/Principle';
import Content from './views/Content';
import Method from './views/Method';
import Effect from './views/Effect';
import WhatIsWaldorf from './views/WhatIsWaldorf';
import WaldorfCornerstone from './views/WaldorfCornerstone';
import WaldorfBenefit from './views/WaldorfBenefit';
import WaldorfTeacherCoreRole from './views/WaldorfTeacherCoreRole';
import WaldorfOrigin from './views/WaldorfOrigin';
import Abouts from './views/Abouts';

const routes = [
    {
        name: 'Home',
        path: '/',
        element: <Home />,
    },
    {
        name: 'Abouts',
        path: '/abouts',
        element: <Abouts />,
    },
    {
        name: 'Founder',
        path: '/founder',
        element: <Founder />,
    },
    {
        name: 'Introduction',
        path: '/introduction',
        element: <Introduction />,
    },
    {
        name: 'TwentyYears',
        path: '/twenty-years',
        element: <TwentyYears />,
    },
    {
        name: 'Principle',
        path: '/principle',
        element: <Principle />,
    },
    {
        name: 'Content',
        path: '/content',
        element: <Content />,
    },
    {
        name: 'Method',
        path: '/method',
        element: <Method />,
    },
    {
        name: 'Effect',
        path: '/effect',
        element: <Effect />,
    },
    {
        name: 'WhatIsWaldorf',
        path: '/what-is-waldorf',
        element: <WhatIsWaldorf />,
    },
    {
        name: 'WaldorfCornerstone',
        path: '/waldorf-cornerstone',
        element: <WaldorfCornerstone />,
    },
    {
        name: 'WaldorfBenefit',
        path: '/waldorf-benefit',
        element: <WaldorfBenefit />,
    },
    {
        name: 'WaldorfTeacherCoreRole',
        path: '/waldorf-teacher-core-role',
        element: <WaldorfTeacherCoreRole />,
    },
    {
        name: 'WaldorfOrigin',
        path: '/waldorf-origin',
        element: <WaldorfOrigin />,
    },

    // draft pages
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