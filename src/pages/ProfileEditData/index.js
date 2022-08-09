import ProfileEditData from './ProfileEditData.hbs';
import './ProfileEditData.scss';
import ProfileComponent from '../../components/ProfileComponent';
import FieldText from '../../components/FieldText';
import FieldTel from '../../components/FieldTel';

export default ProfileEditData({profile: ProfileComponent(
    ({
        userName: 'Михаил',
        emailField: FieldText({labelText: 'Почта'}),
        loginField: FieldText({labelText: 'Логин'}),
        nameField: FieldText({labelText: 'Имя'}),
        lastnameField: FieldText({labelText: 'Фамилия'}),
        chatNameField: FieldText({labelText: 'Имя в чате'}),
        telField: FieldTel({labelText: 'Телефон'}),
        actions: [
            `<button class="profile-component__btn">Сохранить</button>`
        ]
    })
)})