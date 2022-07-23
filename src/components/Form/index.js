import Form from './Form.hbs';
import './Form.scss';
import FieldText from '../FieldText';
import FieldPassword from '../FieldPassword';

export default Form({ loginField: FieldText({ labelText: 'Логин' }), passwordField: FieldPassword({labelText: 'Пароль'}), titleText: 'Вход', btnText: 'Авторизоваться', linkText: 'Нет аккаунта?' });