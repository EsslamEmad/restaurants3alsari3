import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  TouchableNativeFeedback,
  BackHandler,
} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {editUser, clearMessage, showMessageChanged} from '../Actions';
import styles, {
  verticalScale,
  scale,
  buttonStyle,
  buttonTextStyle,
  textPageContent,
  moderateScale,
  primaryColor,
  secondaryColor,
} from './Assets/Styles/Style';
import {
  Container,
  Toast,
  Text,
  Header,
  Button,
  View,
  Spinner,
  Icon,
} from 'native-base';

import {L, changeLng} from '../Config';

class Language extends Component {
  state = {
    aciveLang: false,
    lang: 'ar',
  };
  handleBackButton = () => {
    this.goBack();
    return true;
  };
  componentDidMount() {
    if (this.props.langPush == true) {
      this.backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          Actions.pop(); // works best when the goBack is async
          return true;
        },
      );
    }
    // if (!this.props.userId) {
    //   this.props.showMessageChanged(L('loginFirst'))
    // }
  }
  // componentDidUpdate(){
  //   console.log(this.state);
  // }
  _sortLanguage() {
    changeLng(this.state.lang, 1);
    // console.log(this.state.lang);

    // if (!this.props.userId) {
    //   this.props.showMessageChanged(L('loginFirst'))
    // } else {
    //   const user = { userId: this.props.userId, language: lang, updateLang: true }
    //   this.props.editUser({ user })
    //   Actions.LoginForm()

    //   // await AsyncStorage.setItem('language', lang);

    // }
  }
  componentWillUnmount() {
    if (this.props.langPush == true) {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        this.handleBackButton,
      );
    }
  }
  _renderError() {
    if (this.props.message) {
      this.props.clearMessage();
      return Toast.show({
        text: this.props.message,
        buttonText: 'تم',
        duration: 3000,
        style: {backgroundColor: '#000'},
      });
    }
  }
  _renderLoading() {
    if (this.props.loading) {
      return <Spinner />;
    }
  }

  render() {
    return (
      <Container>
        <Header
          androidStatusBarColor={primaryColor}
          style={{display: 'none'}}
        />
        {this.props.langPush == true ? (
          <View
            style={{position: 'absolute', top: 5, left: 5, zIndex: 9999999}}>
            <Button
              onPress={() => Actions.pop()}
              transparent
              background={TouchableNativeFeedback.Ripple(secondaryColor)}
              style={styles.headerBack}>
              <Icon
                name="keyboard-backspace"
                type="MaterialIcons"
                style={{
                  color: primaryColor,
                  fontSize: 25,
                  transform: [{scaleX: L('scaleLang')}],
                }}
              />
            </Button>
          </View>
        ) : null}
        {/* <Image source={require('./assets/images/splash.png')}
          style={{ position: 'absolute', right: 0, left: 0, width: scale(100), height: verticalScale(100), zIndex: -1 }} /> */}
        <View
          style={{
            justifyContent: 'center',
            height: verticalScale(30),
            alignSelf: 'center',
          }}>
          <Image
            source={require('./Assets/Images/splash.png')}
            style={{
              width: moderateScale(90),
              height: moderateScale(80),
              resizeMode: 'contain',
              marginTop: verticalScale(30),
              // borderColor: "#00f",
              // borderWidth: 2
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: verticalScale(70),
            alignSelf: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              overflow: 'hidden',
              borderRadius: moderateScale(10),
              borderWidth: 1,
              borderColor: primaryColor,
            }}>
            <Button
              transparent
              style={[
                styles.langButton,
                {
                  backgroundColor:
                    this.state.aciveLang === true
                      ? 'transparent'
                      : primaryColor,
                },
              ]}
              onPress={() =>
                this.setState({
                  aciveLang: false,
                  lang: 'ar',
                })
              }>
              <Text
                style={[
                  styles.buttonTextStyle,
                  {
                    color:
                      this.state.aciveLang === true ? primaryColor : '#fff',
                  },
                ]}>
                عربي
              </Text>
            </Button>
            <Button
              transparent
              style={[
                styles.langButton,
                {
                  backgroundColor:
                    this.state.aciveLang === false
                      ? 'transparent'
                      : primaryColor,
                },
              ]}
              onPress={() =>
                this.setState({
                  aciveLang: true,
                  lang: 'en',
                })
              }>
              <Text
                style={[
                  styles.buttonTextStyle,
                  {
                    color:
                      this.state.aciveLang === true ? '#fff' : primaryColor,
                  },
                ]}>
                English
              </Text>
            </Button>
          </View>
          <Button
            onPress={() => this._sortLanguage()}
            style={[
              styles.buttonStyle2,
              {
                marginTop: verticalScale(2),
              },
            ]}>
            <Text style={styles.buttonTextStyle}>{L('startOver')}</Text>
          </Button>
        </View>

        {this._renderLoading()}
        {this._renderError()}
      </Container>
    );
  }
}

const mapStateToProps = ({auth}) => {
  const {loading} = auth;
  // console.log(result);
  return {loading};
};

export default connect(mapStateToProps, {
  editUser,
  clearMessage,
  showMessageChanged,
})(Language);
