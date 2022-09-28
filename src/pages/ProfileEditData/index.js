import ProfileEditData from './ProfileEditData.hbs';
import './ProfileEditData.scss';
import ProfileModule from '../../modules/ProfileModule';
import FieldText from '../../components/FieldText';
import FieldTel from '../../components/FieldTel';
import Avatar from '../../components/Avatar';
import UploadModal from '../../modules/UploadModal';
import Modal from '../../components/Modal';

export default ProfileEditData({
    profile: ProfileModule({
        avatar: Avatar(),
        userName: 'Михаил',
        emailField: FieldText({ labelText: 'Почта' }),
        loginField: FieldText({ labelText: 'Логин' }),
        nameField: FieldText({ labelText: 'Имя' }),
        lastnameField: FieldText({ labelText: 'Фамилия' }),
        chatNameField: FieldText({ labelText: 'Имя в чате' }),
        telField: FieldTel({ labelText: 'Телефон' }),
        actions: [`<button class="profile-component__btn">Сохранить</button>`],
    }),
    modal: Modal({children: UploadModal})
});
