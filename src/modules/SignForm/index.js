import Form from './SignForm.hbs';
import './SignForm.scss';
import FieldText from '../../components/FieldText';
import FieldPassword from '../../components/FieldPassword';

export default Form({
    loginField: FieldText({ labelText: 'Логин' }),
    passwordField: FieldPassword({ labelText: 'Пароль' }),
    titleText: 'Вход',
    btnText: 'Авторизоваться',
    linkText: 'Нет аккаунта?',
});
