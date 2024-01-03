import Home from './views/Home';
import Demo from './views/Demo';
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
import AdmissionIntroduction from './views/AdmissionIntroduction';
import ClassSchedule from './views/ClassSchedule';
import CourseDegisn from './views/CourseDesign';
import OnlineCourse from './views/OnlineCourse';
import Teachers from './views/Teachers';
import RegisterInfo from './views/RegisterInfo';
import PublicCourse from './views/PublicCourse';
import InvitationAndCooperation from './views/InvitationAndCooperation';

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
    {
        name: 'AdmissionIntroduction',
        path: '/admission-introduction',
        element: <AdmissionIntroduction />,
    },
    {
        name: 'ClassSchedule',
        path: '/class-schedule',
        element: <ClassSchedule />,
    },
    {
        name: 'CourseDesign',
        path: '/course-design',
        element: <CourseDegisn />,
    },
    {
        name: 'OnlineCourse',
        path: '/online-course',
        element: <OnlineCourse />,
    },
    {
        name: 'Teachers',
        path: '/teachers',
        element: <Teachers />,
    },
    {
        name: 'RegisterInfo',
        path: '/register-info',
        element: <RegisterInfo />,
    },
    {
        name: 'PublicCourse',
        path: '/public-course',
        element: <PublicCourse />,
    },
    {
        name: 'InvitationAndCooperation',
        path: '/invitation-cooperation',
        element: <InvitationAndCooperation />,
    },

    // draft pages
    {
        name: 'Demo',
        path: '/demo',
        element: <Demo />,
    },
]

export default routes;