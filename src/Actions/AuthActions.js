import {
    EMAIL_USER_CHANGED, PASSWORD_CHANGED, CONFIRM_PASSWORD_CHANGED,
    UPLOAD_PHOTO, UPLOAD_PHOTO_SUCCESS, UPLOAD_PHOTO_FAIL,
    FORGET_EMAIL_CHANGED, CHANGE_MESSAGE,
    APPLY_CODE, LOGIN_USER, LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS, GET_USER, GET_USER_SUCCESS,
    GET_USER_FAIL, CLEAR_MESSAGE, FORGET_USER_FAIL, FORGET_USER_SUCCESS, FORGET_USER,
    REGISTER_USER, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS,
    EDIT_USER_FAIL, EDIT_USER_SUCCESS, EDIT_USER,
    USERNAME_CHANGED, CLEAR_USER, PHONE_CHANGED, NAV_SCENE_CHANGED,
    NAV_SCENE_CLEAR
  } from './types';
  
  import axios from 'axios';
  import { Actions } from 'react-native-router-flux';
  import { headers, baseUrl, L, changeLng, language, base } from '../Config'
  import AsyncStorage from '@react-native-community/async-storage';
  
  
  _storeUser = async (user) => {
    // console.log(user);
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      // console.log(error);
    }
  
  }
  export const changeNavScene = (text) => {
    // console.log(text);
    return {
      type: NAV_SCENE_CHANGED,
      payload: text
    };
  };
  export const clearNavScene = (text) => {
    // console.log(text);
    return {
      type: NAV_SCENE_CLEAR,
      payload: text
    };
  };
  export const clearUser = (text) => {
    return {
      type: CLEAR_USER,
      payload: text
    };
  };
  export const emailForgetUserChanged = (text) => {
    // console.log(text);
    return {
      type: FORGET_EMAIL_CHANGED,
      payload: text
    };
  };
  export const phoneChanged = (text) => {
    return {
      type: PHONE_CHANGED,
      payload: text
    };
  };
  export const emailUserChanged = (text) => {
    return {
      type: EMAIL_USER_CHANGED,
      payload: text
    };
  };
  export const passwordChanged = (text) => {
    return {
      type: PASSWORD_CHANGED,
      payload: text
    };
  };
  export const confirmPasswordChanged = (text) => {
    return {
      type: CONFIRM_PASSWORD_CHANGED,
      payload: text
    };
  };
  export const usernameChanged = (text) => {
    return {
      type: USERNAME_CHANGED,
      payload: text
    };
  };
  export const showMessageChanged = (text) => {
    return {
      type: CHANGE_MESSAGE,
      payload: text
    };
  };
  export const clearMessage = (text) => {
    return {
      type: CLEAR_MESSAGE,
      payload: text
    };
  };
  export const loginUser = ({ email, password, token }) => {
    // console.log({email, password, language, token });
  
    return (dispatch) => {
      dispatch({ type: LOGIN_USER });
      axios.post(baseUrl + 'login',
        {
          email: email,
          password: password,
          token: token,
        },
        { headers: headers }
      ).then(function (data) {
        // console.log(data);
        if (data.data.success) {
          loginUserSuccess(dispatch, data.data);
          // console.log(data);
        } else {
          loginUserFail(dispatch, data.data.error);
          // console.log(data);
        }
      })
        .catch(function (error) {
          // console.log(error);
  
          // handle error
          loginUserFail(dispatch, L('connectionError'));
        })
    };
  }
  
  const loginUserFail = (dispatch, error) => {
    // console.log(error);
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: error
    });
    // console.log('failed')
  };
  
  const loginUserSuccess = (dispatch, user) => {
    // console.log(user);
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user.data
    });
    _storeUser(user.data);
    Actions.reset('lunch')
    // alert('success')
  };
  
  export const registerUser = ({ user }) => {
    // console.log(user);
  
    return (dispatch) => {
      dispatch({ type: REGISTER_USER });
      axios.post(baseUrl + 'register',
        {
          name: user.name,
          email: user.email,
          phone: user.phone,
          photo: user.photo,
          password: user.password,
          token: user.token,
        },
        { headers: headers }
      ).then(function (data) {
        // console.log(data.data);
        if (data.data.success) {
          registerUserSuccess(dispatch, data.data);
        } else {
          registerUserFail(dispatch, data.data.error);
        }
      })
        .catch(function (error) {
          // console.log(error);
  
          // handle error
          registerUserFail(dispatch, L('connectionError'));
        });
    };
  };
  
  const registerUserSuccess = (dispatch, user) => {
    // console.log(data.data);
  
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: user.data
    });
    _storeUser(user.data);
    Actions.reset('lunch')
    // console.log('success');
  }
  const registerUserFail = (dispatch, error) => {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error
    });
    // console.log('failed');
  }
  export const editUser = ({ user }) => {
    // console.log(user);
  
    return (dispatch) => {
      dispatch({ type: EDIT_USER });
      axios.post(baseUrl + 'editUser/',
        {
          name: user.name,
          email: user.email,
          phone: user.phone,
          photo: user.photo,
          password: user.password,
          token: user.token,
          user_id: user.user_id
        },
        { headers: headers }
      ).then(function (data) {
        // console.log(data.data);
        if (data.data.success) {
          editUserSuccess(dispatch, data.data);
        } else {
          editUserFail(dispatch, data.data.error);
          // console.log(data.data);
        }
      })
        .catch(function (error) {
          // console.log(error);
  
          // handle error
          editUserFail(dispatch, L('connectionError'));
        });
    };
  };
  
  const editUserSuccess = (dispatch, user) => {
    dispatch({
      type: EDIT_USER_SUCCESS,
      payload: user
    });
    _storeUser(user.data);
    Actions.pop()
  }
  const editUserFail = (dispatch, error) => {
    // console.log(error);
  
    dispatch({
      type: EDIT_USER_FAIL,
      payload: error
    });
  }
  export const getUser = (userId) => {
    // console.log(userId);
    return (dispatch) => {
      dispatch({ type: GET_USER });
      axios.get(baseUrl + 'getUser/' + userId,
        { headers: headers }
      ).then(function (data) {
        // console.log(data.data);
        if (data.data.success) {
          getUserSuccess(dispatch, data.data);
          // console.log('success')
        } else {
          getUserFail(dispatch, data.data.error);
          // console.log('failed')
        }
      })
        .catch(function (error) {
          // console.log(error);
          // handle error
          getUserFail(dispatch, L('connectionError'));
        })
    };
  };
  
  const getUserFail = (dispatch, error) => {
    dispatch({
      type: GET_USER_FAIL,
      payload: error
    });
  };
  
  const getUserSuccess = (dispatch, user) => {
    // console.log('action',user);
    dispatch({
      type: GET_USER_SUCCESS,
      payload: user.data
    });
  };
  
  export const forgetUserPassword = (email) => {
    // console.log(email);
    return (dispatch) => {
      dispatch({ type: FORGET_USER });
      axios.post(baseUrl + 'forgotPassword',
        {
          email: email,
        },
        { headers: headers }
      ).then(function (data) {
        // console.log(data);
        if (data.data.success) {
          forgetUserSuccess(dispatch, data.data);
          // console.log('success');
  
        } else {
          forgetUserFail(dispatch, data.data.error);
        }
      })
        .catch(function (error) {
          // handle error
          forgetUserFail(dispatch, L('connectionError'));
        })
    };
  }
  
  const forgetUserFail = (dispatch, error) => {
    dispatch({
      type: FORGET_USER_FAIL,
      payload: error
    });
    // console.log(error);
  
  };
  
  const forgetUserSuccess = (dispatch, data) => {
    // console.log(data.data);
    dispatch({
      type: FORGET_USER_SUCCESS,
      payload: data.data
    });
  };
  export const uploadPhoto = (photo, flag) => {
    // console.log(photo);
    return (dispatch) => {
      dispatch({ type: UPLOAD_PHOTO });
  
      const formData = new FormData();
      formData.append('image', {
        name: photo.name,
        type: 'IMAGE/JPEG',
        uri: photo.uri
      });
      axios({
        method: 'post',
        url: baseUrl + 'upload',
        data: formData,
        headers: headers
      }).then(function (data) {
        // console.log(data.data);
        if (data.data.success) {
          // console.log('suc',data.data.data);
          uploadPhotoSuccess(dispatch, data.data.data, flag);
        } else {
          // console.log('err',data.data.data);
          uploadPhotoFail(dispatch, data.data.error);
        }
      })
        .catch(function (error) {
          // console.log(error);
  
          // handle error
          uploadPhotoFail(dispatch, 'مسار الصورة غير مدعوم');
        })
    };
  };
  const uploadPhotoFail = (dispatch, error) => {
    // console.log(error);
    dispatch({
      type: UPLOAD_PHOTO_FAIL,
      payload: error
    });
  };
  
  const uploadPhotoSuccess = (dispatch, result, flag) => {
    // console.log(result);
    const resp = { result, flag }
    dispatch({
      type: UPLOAD_PHOTO_SUCCESS,
      payload: resp
    });
  };
  