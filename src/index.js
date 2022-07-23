import './style.scss';
import ErrorPage from './pages/500';
import NotFound from './pages/404';
import Sign from './pages/Sign';
import Reg from './pages/Reg';

const root = document.querySelector('#root');


const routes = {
    '/500': ErrorPage,
    '/sign': Sign,
    '/reg': Reg,
}

window.onload = () => {
    const path = window.location.pathname;
    if (routes[path]) {
        root.innerHTML = routes[path];
    } else {
        root.innerHTML = NotFound;
    }
    
}
