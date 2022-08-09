import ProfileEditPassword from './ProfileEditPassword.hbs';
import './ProfileEditPassword.scss';
import FieldPassword from '../../components/FieldPassword';

export default ProfileEditPassword({
    oldPass: FieldPassword({ labelText: 'Старый пароль' }),
    newPass: FieldPassword({ labelText: 'Новый пароль' }),
    repeatPass: FieldPassword({ labelText: 'Повторите новый пароль' }),
    actions: [`<button class="profile-component__btn">Сохранить</button>`],
});
