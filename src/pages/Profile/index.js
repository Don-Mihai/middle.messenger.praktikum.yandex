import Profile from './Profile.hbs';
import './Profile.scss';
import ProfileModule from '../../modules/ProfileModule';
import FieldText from '../../components/FieldText';
import FieldTel from '../../components/FieldTel';
import Avatar from '../../components/Avatar';

export default Profile({
    profile: ProfileModule({
        avatar: Avatar(),
        userName: 'Михаил',
        emailField: FieldText({ labelText: 'Почта' }),
        loginField: FieldText({ labelText: 'Логин' }),
        nameField: FieldText({ labelText: 'Имя' }),
        lastnameField: FieldText({ labelText: 'Фамилия' }),
        chatNameField: FieldText({ labelText: 'Имя в чате' }),
        telField: FieldTel({ labelText: 'Телефон' }),
        actions: [
            `<a class="profile-module__action" href="/profile/edit/data">
                Изменить данные
            </a>`,
            `<a class="profile-module__action" href="/profile/edit/password">
                Изменить пароль
            </a>`,
            `<div class="profile-module__action profile-module__action_exit">
                Выйти
            </div>`,
        ],
    }),
});
