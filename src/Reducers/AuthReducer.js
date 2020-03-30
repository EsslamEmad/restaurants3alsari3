import {
    EMAIL_USER_CHANGED, PASSWORD_CHANGED, CONFIRM_PASSWORD_CHANGED,
    UPLOAD_PHOTO, UPLOAD_PHOTO_SUCCESS, UPLOAD_PHOTO_FAIL,
    LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, REGISTER_USER
    , FORGET_USER, FORGET_USER_SUCCESS,
    FORGET_USER_FAIL, CHANGE_MESSAGE, FORGET_EMAIL_CHANGED,
    REGISTER_USER_SUCCESS, REGISTER_USER_FAIL,
    GET_USER, GET_USER_SUCCESS, GET_USER_FAIL, CLEAR_MESSAGE,
    EDIT_USER_FAIL, EDIT_USER_SUCCESS, EDIT_USER,
    USERNAME_CHANGED, CLEAR_USER, PHONE_CHANGED, NAV_SCENE_CHANGED,
    NAV_SCENE_CLEAR
} from '../Actions/types';
import { baseUploadUrl } from '../Config'

const INITAL_STATE = {
    email: '', password: '', name: '', phone: '', loading: false,
    message: '', emailF: '', image: '', thumb: '', photo: '', photo_thumb: '',
    user: null, success: null, rePassword: '', result: null
    , navScene: '', billPhoto: '', billPhoto_thumb: ''
};
export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE:
            return { ...state, message: action.payload };
        case CLEAR_MESSAGE:
            return { ...state, message: '' };
        case NAV_SCENE_CHANGED:
            return { ...state, navScene: action.payload }
        case NAV_SCENE_CLEAR:
            return { ...state, navScene: '' }
        case CLEAR_USER:
            return { ...state, ...INITAL_STATE };
        case UPLOAD_PHOTO:
            return { ...state, loading: true };
        case UPLOAD_PHOTO_SUCCESS:
            // console.log(action.payload);

            if (action.payload.flag == 1) {
                return {
                    ...state, loading: false, photo: action.payload.result.image,
                    photo_thumb: action.payload.result.thumb
                }
            }
            else if (action.payload.flag == 2) {
                return {
                    ...state, loading: false, billPhoto: action.payload.result.image,
                    billPhoto_thumb: action.payload.result.thumb
                }
            }
            else {
                return {
                    ...state, loading: false, image: action.payload.result.image,
                    thumb: action.payload.result.thumb
                }
            };
        case UPLOAD_PHOTO_FAIL:
            return { ...state, message: action.payload, loading: false };
        case EMAIL_USER_CHANGED:
            return { ...state, email: action.payload };
        case PHONE_CHANGED:
            return { ...state, phone: action.payload };
        case CHANGE_MESSAGE:
            return { ...state, message: action.payload };
        case CLEAR_MESSAGE:
            return { ...state, message: '' };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case CONFIRM_PASSWORD_CHANGED:
            return { ...state, rePassword: action.payload };
        case USERNAME_CHANGED:
            // console.log(action.payload);
            return { ...state, name: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true };
        case LOGIN_USER_SUCCESS:
            // console.log(action.payload);
            return { ...state, user: action.payload, loading: false };
        case LOGIN_USER_FAIL:
            // console.log(action.payload);
            return {
                ...state, message: action.payload,
                password: '', loading: false
            };
        case FORGET_EMAIL_CHANGED:
            // console.log(action.payload);
            return { ...state, emailF: action.payload }
        case FORGET_USER:
            return { ...state, loading: true };
        case FORGET_USER_SUCCESS:
            // console.log(action.payload);
            return {
                ...state,
                message: action.payload.message,
                loading: false
            };
        case FORGET_USER_FAIL:
            // console.log(action.payload);
            return {
                ...state, message: action.payload,
                loading: false
            };

        case REGISTER_USER:
            return { ...state, loading: true };
        case REGISTER_USER_SUCCESS:
            return { ...state, user: action.payload, loading: false };
        case REGISTER_USER_FAIL:
            return {
                ...state, message: action.payload, password: '',
                rePassword: '', loading: false
            };
        case EDIT_USER:
            return { ...state, loading: true };
        case EDIT_USER_SUCCESS:
            var item = action.payload.data;
            // console.log('editUser', action.payload);
            return {
                ...state,
                loading: false,
                user: item,
                name: item.name,
                email: item.email,
                phone: item.phone,
                // photo_thumb: item.thumb,
                photo: item.photo,
                password: item.password,
                rePassword: item.rePassword,
                token: item.token,
                user_id: item.user_id,
                message: action.payload.message,
            };
        case EDIT_USER_FAIL:
            // console.log(action.payload);
            return {
                ...state, message: action.payload, loading: false
            };
        case GET_USER:
            return { ...state, loading: true };
        case GET_USER_SUCCESS:
            var item = action.payload;
            // console.log('getUser', item);
            if (action.payload.message) {
                message = action.payload.message;
            } else {
                message = '';
            }
            return {
                ...state,
                loading: false,
                user: item,
                name: item.name,
                email: item.email,
                password: item.password,
                phone: item.phone,
                photo: item.photo,
                token: item.token,
            };
        case GET_USER_FAIL:
            // console.log(action.payload);
            return { ...state, loading: false, message: action.payload };
        default:
            return state;
    }
}
