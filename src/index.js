import './style.scss';
import ErrorPage from './pages/500';
import NotFound from './pages/404';
import Sign from './pages/Sign';

const root = document.querySelector('#root');


const routes = {
    '/500': ErrorPage,
    '/sign': Sign
}

window.onload = () => {
    const path = window.location.pathname;
    if (routes[path]) {
        root.innerHTML = routes[path];
    } else {
        root.innerHTML = NotFound;
    }
    
}
