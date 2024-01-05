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
        name: 'HomeEn',
        path: '/en',
        element: <Home />,
    },
    {
        name: 'Home',
        path: '/',
        element: <Home />,
    },
    {
        name: 'Abouts',
        path: '/abouts/en',
        element: <Abouts />,
    },
    {
        name: 'Abouts',
        path: '/abouts',
        element: <Abouts />,
    },
    {
        name: 'Founder',
        path: '/founder/en',
        element: <Founder />,
    },
    {
        name: 'Founder',
        path: '/founder',
        element: <Founder />,
    },
    {
        name: 'Introduction',
        path: '/introduction/en',
        element: <Introduction />,
    },
    {
        name: 'Introduction',
        path: '/introduction',
        element: <Introduction />,
    },
    {
        name: 'TwentyYears',
        path: '/twenty-years/en',
        element: <TwentyYears />,
    },
    {
        name: 'TwentyYears',
        path: '/twenty-years',
        element: <TwentyYears />,
    },
    {
        name: 'Principle',
        path: '/principle/en',
        element: <Principle />,
    },
    {
        name: 'Principle',
        path: '/principle',
        element: <Principle />,
    },
    {
        name: 'Content',
        path: '/content/en',
        element: <Content />,
    },
    {
        name: 'Content',
        path: '/content',
        element: <Content />,
    },
    {
        name: 'Method',
        path: '/method/en',
        element: <Method />,
    },
    {
        name: 'Method',
        path: '/method',
        element: <Method />,
    },
    {
        name: 'Effect',
        path: '/effect/en',
        element: <Effect />,
    },
    {
        name: 'Effect',
        path: '/effect',
        element: <Effect />,
    },
    {
        name: 'WhatIsWaldorf',
        path: '/what-is-waldorf/en',
        element: <WhatIsWaldorf />,
    },
    {
        name: 'WhatIsWaldorf',
        path: '/what-is-waldorf',
        element: <WhatIsWaldorf />,
    },
    {
        name: 'WaldorfCornerstone',
        path: '/waldorf-cornerstone/en',
        element: <WaldorfCornerstone />,
    },
    {
        name: 'WaldorfCornerstone',
        path: '/waldorf-cornerstone',
        element: <WaldorfCornerstone />,
    },
    {
        name: 'WaldorfBenefit',
        path: '/waldorf-benefit/en',
        element: <WaldorfBenefit />,
    },
    {
        name: 'WaldorfBenefit',
        path: '/waldorf-benefit',
        element: <WaldorfBenefit />,
    },
    {
        name: 'WaldorfTeacherCoreRole',
        path: '/waldorf-teacher-core-role/en',
        element: <WaldorfTeacherCoreRole />,
    },
    {
        name: 'WaldorfTeacherCoreRole',
        path: '/waldorf-teacher-core-role',
        element: <WaldorfTeacherCoreRole />,
    },
    {
        name: 'WaldorfOrigin',
        path: '/waldorf-origin/en',
        element: <WaldorfOrigin />,
    },
    {
        name: 'WaldorfOrigin',
        path: '/waldorf-origin',
        element: <WaldorfOrigin />,
    },
    {
        name: 'AdmissionIntroduction',
        path: '/admission-introduction/en',
        element: <AdmissionIntroduction />,
    },
    {
        name: 'AdmissionIntroduction',
        path: '/admission-introduction',
        element: <AdmissionIntroduction />,
    },
    {
        name: 'ClassSchedule',
        path: '/class-schedule/en',
        element: <ClassSchedule />,
    },
    {
        name: 'ClassSchedule',
        path: '/class-schedule',
        element: <ClassSchedule />,
    },
    {
        name: 'CourseDesign',
        path: '/course-design/en',
        element: <CourseDegisn />,
    },
    {
        name: 'CourseDesign',
        path: '/course-design',
        element: <CourseDegisn />,
    },
    {
        name: 'OnlineCourse',
        path: '/online-course/en',
        element: <OnlineCourse />,
    },
    {
        name: 'OnlineCourse',
        path: '/online-course',
        element: <OnlineCourse />,
    },
    {
        name: 'Teachers',
        path: '/teachers/en',
        element: <Teachers />,
    },
    {
        name: 'Teachers',
        path: '/teachers',
        element: <Teachers />,
    },
    {
        name: 'RegisterInfo',
        path: '/register-info/en',
        element: <RegisterInfo />,
    },
    {
        name: 'RegisterInfo',
        path: '/register-info',
        element: <RegisterInfo />,
    },
    {
        name: 'PublicCourse',
        path: '/public-course/en',
        element: <PublicCourse />,
    },
    {
        name: 'PublicCourse',
        path: '/public-course',
        element: <PublicCourse />,
    },
    {
        name: 'InvitationAndCooperation',
        path: '/invitation-cooperation/en',
        element: <InvitationAndCooperation />,
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