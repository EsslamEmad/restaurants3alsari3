import React, {Component} from 'react';
import {
  Image,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {Spinner} from './Assets/Common';
import {L} from '../Config';
import styles, {
  verticalScale,
  scale,
  buttonStyle,
  buttonTextStyle,
  moderateScale,
  lbgImage,
  imageContainer,
  textContainer,
  touchableText,
  solidText,
  bgLogo,
  inputField,
  primaryColor,
  fontBold,
  DroidKufi,
  DroidKufiBold,
  fontRegular,
} from './Assets/Styles/Style';
import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  Content,
  Header,
  Form,
  Item,
  Input,
  Button,
  Text,
  View,
  Icon,
  Toast,
  Label,
} from 'native-base';
import {
  emailUserChanged,
  passwordChanged,
  loginUser,
  showMessageChanged,
  getUser,
  emailForgetUserChanged,
  clearMessage,
  forgetUserPassword,
  rePasswordChanged,
} from '../Actions';

class LoginForm extends Component {
  state = {
    language: 'ar',
    modalVisible: false,
    welcomeModal: false,
    token: null,
    isFocused: false,
    showPassword: true,
  };
  onButtonPress = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    // then navigate
    // navigate('NewScreen');
  };

  handleBackButton = () => {
    Actions.pop();
    return true;
  };
  componentDidMount() {
    this.props.getFilterOptions(); 
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  componentDidMount = async () => {
    const fcmToken = await firebase.messaging().getToken();
    try {
      lang = await AsyncStorage.getItem('language');
      if (lang) {
        this.setState({language: lang});
        this._getData()
      }
    } catch (error) {}
    if (fcmToken) {
      this.setState({token: fcmToken});
      //   alert(fcmToken);
      // user has a device token
    } else {
      this.onTokenRefreshListener = firebase
        .messaging()
        .onTokenRefresh(fcmToken => {
          // console.log('2', fcmToken);
          // Process your token as required
        });
    }
  };
  _getData() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  emailUserChanged(text) {
    this.props.emailUserChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
    this.setState({isFocused: false});
  }

  onForgetPassChange(text) {
    this.props.emailForgetUserChanged(text);
  }
  onMessageChange(text) {
    this.props.showMessageChanged(text);
  }
  onLoginPressed() {
    const {email, password} = this.props;
    // console.log(email);

    if (email == '') {
      this.onMessageChange(L('emptyField') + ' ' + L('email'));
    } else if (password == '') {
      this.onMessageChange(L('emptyField') + ' ' + L('password'));
    } else {
      this.props.loginUser({
        email,
        password,
        language: this.state.language,
        token: this.state.token,
      });
      // this.setWelcomeModal(true)
    }

    // console.log('sucess')
  }

  _renderError() {
    if (this.props.message) {
      this.props.clearMessage();
      return Toast.show({
        text: this.props.message,
        buttonText: L('dismiss'),
        duration: 3000,
        style: {backgroundColor: primaryColor},
        textStyle: {fontFamily: DroidKufi, fontSize: moderateScale(4.5)},
        buttonTextStyle: {fontFamily: DroidKufi, fontSize: moderateScale(4.5)},
      });
    }
  }
  renderLoading() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
  }
  _renderSendButton() {
    return (
      <Button
        block
        style={[styles.buttonStyle, {width: scale(80)}]}
        onPress={() => this.onSendEmail()}>
        <Text style={styles.buttonTextStyle}>{L('send')}</Text>
      </Button>
    );
  }
  renderShowHidePass() {
    if (this.state.showPassword == true) {
      return (
        <Icon
          name="eye-off"
          background={TouchableNativeFeedback.Ripple(primaryColor)}
          style={{color: '#929292'}}
          onPress={() => this.setState({showPassword: false})}
        />
      );
    } else {
      return (
        <Icon
          name="eye"
          background={TouchableNativeFeedback.Ripple(primaryColor)}
          style={{color: primaryColor}}
          onPress={() => this.setState({showPassword: true})}
        />
      );
    }
  }
  render() {
    return (
      <Container>
        <Header
          androidStatusBarColor={primaryColor}
          style={{display: 'none'}}
        />
        <Content>
          <View style={{height: verticalScale(90), alignSelf: 'center'}}>
            {/* <Image source={require('./assets/images/bg1.png')} style={styles.bgLogo} /> */}
            <Item style={styles.imageContainer}>
              <Image
                source={require('./Assets/Images/splash.png')}
                style={styles.lbgImage}
              />
            </Item>
            <Item
              style={[
                styles.inputAuthContainer,
                {
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                },
              ]}
              floatingLabel>
              <Label style={styles.inputLabel}>{L('email')}</Label>
              <Input
                onChangeText={this.emailUserChanged.bind(this)}
                value={this.props.email}
                style={[styles.inputField, {textAlign: L('textAlignRight')}]}
              />
            </Item>
            <Item
              style={[
                styles.inputAuthContainer,
                {
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                },
              ]}
              floatingLabel>
              <Label style={styles.inputLabel}>{L('password')}</Label>
              <Input
                onChangeText={this.onPasswordChange.bind(this)}
                secureTextEntry={this.state.showPassword}
                value={this.props.password}
                style={[styles.inputField, {textAlign: L('textAlignRight')}]}
              />
              {this.renderShowHidePass()}
            </Item>
            <Item
              style={{
                borderBottomWidth: 0,
                marginBottom: verticalScale(1.5),
                paddingLeft: 5,
                marginTop: verticalScale(1.5),
              }}>
              <TouchableWithoutFeedback onPress={() => Actions.push('forgot')}>
                <Text style={styles.touchableText}>{L('forget_password')}</Text>
              </TouchableWithoutFeedback>
            </Item>
            <Item style={{borderBottomWidth: 0}}>
              <Button
                block
                style={[
                  styles.buttonStyle,
                  {
                    marginBottom: verticalScale(2),
                  },
                ]}
                onPress={() => this.onLoginPressed()}>
                <Text style={styles.buttonTextStyle}>{L('login')}</Text>
              </Button>
            </Item>
            <Item style={{borderBottomWidth: 0}}>
              <Button
                style={styles.buttonStyle3}
                bordered
                block
                onPress={() => Actions.push('register')}>
                <Text style={[styles.buttonTextStyle, {color: primaryColor}]}>
                  {L('register')}
                </Text>
              </Button>
            </Item>
            <TouchableOpacity onPress={() => Actions.reset('homeStack')}>
              <Text
                style={[
                  styles.fontRegular,
                  {alignSelf: 'center', marginTop: verticalScale(3),fontSize:moderateScale(6),color: primaryColor},
                ]}>
                {L('browseApp')}
              </Text>
            </TouchableOpacity>
          </View>
        </Content>
        {this._renderError()}
        {this.renderLoading()}
      </Container>
    );
  }
}

const mapStateToProps = ({auth}) => {
  const {
    email,
    password,
    loading,
    message,
    user,
    token,
    success,
    emailF,
  } = auth;
  // console.log(user);
  return {email, password, loading, message, user, token, success, emailF};
};
export default connect(mapStateToProps, {
  emailUserChanged,
  passwordChanged,
  getUser,
  rePasswordChanged,
  clearMessage,
  loginUser,
  showMessageChanged,
  emailForgetUserChanged,
  forgetUserPassword,
})(LoginForm);
