import './style.scss';
import ErrorPage from './pages/500';
import NotFound from './pages/404';
import Sign from './pages/Sign';
import Reg from './pages/Reg';
import Profile from './pages/Profile';
import ProfileEditData from './pages/ProfileEditData';
import ProfileEditPassword from './pages/ProfileEditPassword';
import Chats from './pages/Chats';

const root = document.querySelector('#root');


const routes = {
    '/500': ErrorPage,
    '/sign': Sign,
    '/reg': Reg,
    '/profile': Profile,
    '/profile/edit/data': ProfileEditData,
    '/profile/edit/password': ProfileEditPassword,
    '/chats': Chats,
}

window.onload = () => {
    const path = window.location.pathname;
    if (routes[path]) {
        root.innerHTML = routes[path];
    } else {
        root.innerHTML = NotFound;
    }
    
}
