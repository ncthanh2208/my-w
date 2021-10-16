import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import BlogPage from '../pages/BlogPage';

const routerIndex = [
    {
        path: '/',
        exact: true,
        components: HomePage, 
    },
    {
        path: '/contact',
        exact: true,
        components: ContactPage, 
    },
    {
        path: '/blog',
        exact: true,
        components: BlogPage, 
    }
];
export default routerIndex;