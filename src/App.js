import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './Reducers';
import ReduxThunk from 'redux-thunk';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';
import {changeLng} from './Config';
import Router from './Router';
import {Actions} from 'react-native-router-flux';
import firebase from 'react-native-firebase';
import {Root, Header} from 'native-base';
import {Alert} from 'react-native';

class App extends Component {
  state = {lang: false};

  componentWillMount = async () => {
    try {
      let lang = await AsyncStorage.getItem('language');
      let user = await AsyncStorage.getItem('user');
      if (lang) {
        // alert(1)
        changeLng(lang);

        if (user) {
          // console.log(user);

          this.setState({lang: true});
          Actions.reset('lunch');
          // alert('user succeess')
        } else {
          // console.log('else');
          this.setState({lang: true});
        }
      } else {
        // console.log('language');
        changeLng('ar');
        this.setState({lang: true});
        Actions.reset('language');
      }

      // I18n.locale = 'ar';
    } catch (error) {
      // console.log(error);
    }
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
    } else {
      await firebase
        .messaging()
        .requestPermission()
        .then(accept => {})
        .catch(error => {});
    }

    this.notificationDisplayedListener = firebase
      .notifications()
      .onNotificationDisplayed((notification: Notification) => {});

    this.notificationListener = firebase
      .notifications()
      .onNotification((notification: Notification) => {
        let notificationData = notification.data; //.notification,
        var click;
        // console.log(notificationData);

        
        // console.log(notificationData);
        Alert.alert(
          notificationData.title,
          notificationData.body,
          [
            // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {
              text: 'cancel',
              // onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'ok', onPress: click},
          ],
          {cancelable: false},
        );
      });
    //App in Foreground and background
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened((notificationOpen: NotificationOpen) => {
        // Get the action triggered by the notification being opened
        const action = notificationOpen.action;
        // Get information about the notification that was opened
        const notification: Notification = notificationOpen.notification.data;
        
      });
    //App closed
    const notificationOpen: NotificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      // App was opened by a notification
      // Get the action triggered by the notification being opened
      const action = notificationOpen.action;
      // Get information about the notification that was opened
      const notification: Notification = notificationOpen.notification.data;

      
    }

    SplashScreen.hide();
  };

  componentWillUnmount() {
    this.notificationDisplayedListener();
    this.notificationListener();
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Root>
        <Header style={{display: 'none'}} androidStatusBarColor="#000" />
        <Provider store={store}>{this.state.lang ? <Router /> : null}</Provider>
      </Root>
    );
  }
}
export default App;
