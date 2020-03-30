import 'react-native-gesture-handler';
import React from 'react';
import {
  Scene,
  Router,
  Actions,
  Stack,
  Tabs,
  Lightbox,
} from 'react-native-router-flux';
import {Button, Icon, Text} from 'native-base';
import {TouchableNativeFeedback, BackHandler} from 'react-native';
import {AsyncStorage} from '@react-native-community/async-storage';
import styles, {
  verticalScale,
  scale,
  buttonStyle,
  buttonTextStyle,
  textPageContent,
  errorTextStyle,
  moderateScale,
  headerStyle,
  primaryColor,
  tabText,
  tabactive,
  tabBarLabel,
  tabBarStyle,
} from './components/Assets/Styles/Style';
//import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import { StackViewStyleInterpolator } from 'react-navigation-stack';
import LoginForm from './components/Login';
import Language from './components/Language';
import Lunch from './components/Launch';
/*import Register from './components/Register';
import ForgetPassword from './components/ForgetPassword';

import Home from './components/Home';
import Profile from './components/Profile';
import About from './components/About';
import Contact from './components/Contact';
import Notificaions from './components/Notificaions';
import EditProfile from './components/EditProfile';
import MyOrders from './components/MyOrders';
import OrderPage from './components/OrderPage';
*/
import {L} from './Config';

class TabIcon extends React.Component {
  render() {
    return (
      <Icon
        style={{
          color: this.props.focused ? '#8c4aa4' : '#999',
          fontSize: moderateScale(8),
        }}
        name={this.props.name}
        type={this.props.type}></Icon>
    );
  }
}

const RouterComponent = () => {
  return (
    <Router>
      <Stack
        key="root"
        transitionConfig={() => ({
          screenInterpolator: props => {
            const {scene} = props;
            switch (scene.route.routeName) {
              case 'language':
                return StackViewStyleInterpolator.forHorizontal(props);
            }
          },
        })}>
        <Scene key="language" component={Language} hideNavBar={true} />
        <Stack component={Lunch} hideNavBar key="lunch" />
        <Stack
          key="auth"
          hideNavBar={true}
          // initial
          transitionConfig={() => ({
            screenInterpolator: props => {
              const {scene} = props;
              switch (scene.route.routeName) {
                case 'login':
                  return StackViewStyleInterpolator.forHorizontal(props);
                case 'register':
                  return StackViewStyleInterpolator.forHorizontal(props);
                case 'forgot':
                  return StackViewStyleInterpolator.forHorizontal(props);
                default:
                  return StackViewStyleInterpolator.forInitial;
              }
            },
          })}>
          <Scene key="login" component={LoginForm} />
          <Scene
            key="register"
            component={Register}
            hideNavBar={false}
            navigationBarStyle={[
              styles.routernavigationBarStyle,
              {backgroundColor: '#fff', elevation: 0},
            ]}
            backButtonTextStyle={[
              styles.routerTitleStyle,
              {color: primaryColor},
            ]}
            renderLeftButton={
              <Button
                onPress={() => Actions.pop()}
                transparent
                background={TouchableNativeFeedback.Ripple(secondaryColor)}
                // style={{ marginTop: verticalScale(1) }}
              >
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
            }
          />
          <Scene key="forgot" component={ForgetPassword} hideNavBar />
        </Stack>
        <Stack
          initial
          key="intro"
          component={Intro}
          hideNavBar
          transitionConfig={() => ({
            screenInterpolator: props => {
              const {scene} = props;
              switch (scene.route.routeName) {
                case 'intro':
                  return StackViewStyleInterpolator.forHorizontal(props);
                default:
                  return StackViewStyleInterpolator.forInitial;
              }
            },
          })}
        />
        <Stack
          key="homeStack"
          hideNavBar
          transitionConfig={() => ({
            screenInterpolator: props => {
              const {scene} = props;
              switch (scene.route.routeName) {
                case 'home':
                  return StackViewStyleInterpolator.forHorizontal(props);
                case 'profile':
                  return StackViewStyleInterpolator.forHorizontal(props);
                case 'about':
                  return StackViewStyleInterpolator.forHorizontal(props);
                case 'contact':
                  return StackViewStyleInterpolator.forHorizontal(props);
                case 'notifications':
                  return StackViewStyleInterpolator.forHorizontal(props);
                case 'editProfile':
                  return StackViewStyleInterpolator.forHorizontal(props);
                case 'myOrders':
                  return StackViewStyleInterpolator.forHorizontal(props);
                case 'orderPage':
                  return StackViewStyleInterpolator.forHorizontal(props);
                default:
                  return StackViewStyleInterpolator.forInitial;
              }
            },
          })}>
          <Scene
              key="home"
              component={Home}
              hideNavBar
              onBack={() => BackHandler.exitApp()}
            />
          <Scene key="profile" component={Profile} hideNavBar />
          <Scene key="about" component={About} hideNavBar />
          <Scene key="contact" component={Contact} hideNavBar />
          <Scene key="notifications" component={Notificaions} hideNavBar />
          <Scene key="editProfile" component={EditProfile} hideNavBar />
          <Scene key="myOrders" component={MyOrders} hideNavBar />
          <Scene key="orderPage" component={OrderPage} hideNavBar />
        </Stack>
      </Stack>
    </Router>
  );
};

export default RouterComponent;
