import './RegForm.scss';
import RegForm from './RegForm.hbs';
import FieldText from '../../components/FieldText';
import FieldPassword from '../../components/FieldPassword';
import FieldTel from '../../components/FieldTel';

export default RegForm({
    mailField: FieldText({ labelText: 'Почта' }),
    loginField: FieldText({ labelText: 'Логин' }),
    nameField: FieldText({ labelText: 'Имя' }),
    lastnameField: FieldText({ labelText: 'Фамилия' }),
    telField: FieldTel({ labelText: 'Телефон' }),
    passField: FieldPassword({ labelText: 'Пароль' }),
    passRepeatField: FieldPassword({ labelText: 'Пароль (ещё раз)' }),
    titleText: 'Регистрация',
    btnText: 'Зарегистрироваться',
    linkText: 'Войти',
});
