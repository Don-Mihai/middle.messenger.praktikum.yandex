import Form from './SignForm.hbs';
import './SignForm.scss';
import FieldText from '../FieldText';
import FieldPassword from '../FieldPassword';

export default Form({
    loginField: FieldText({ labelText: 'Логин' }),
    passwordField: FieldPassword({ labelText: 'Пароль' }),
    titleText: 'Вход',
    btnText: 'Авторизоваться',
    linkText: 'Нет аккаунта?',
});
