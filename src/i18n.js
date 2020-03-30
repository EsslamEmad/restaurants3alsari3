import I18n from 'react-native-i18n';
import AsyncStorage from '@react-native-community/async-storage';
import en from './Localization/en';
import ar from './Localization/ar';
var language;
I18n.translations = {
  ar,
  en,
};
// I18n.locale = 'ar';

getLangStored = async () => {
  // var lan g ='ar';
  try {
    let lang = await AsyncStorage.getItem('language');
    if (lang !== null) {
      return lang;
    }
    // return lang;
  } catch (error) {
    // Error retrieving data
  }
};

getLangStored().then(async result => {
  I18n.locale = await result;
  this.language;
});
I18n.fallbacks = true;

// console.log('2',I18n.locale);
export default I18n;
export const baseUrl = 'https://3alsri3.com/' + this.language + '/mobile/';
export const base = 'https://adasatik.com/upload/';

export const headers = {
  Accept: 'application/json',
  // 'content-type': 'multipart/form-data',
  client: 'f229b09fa84056aba7e59b6d9d6255a3a8a50d82',
  secret: 'a9e85ab9c54b2cc7755ee1f9f18d0c033dba1abb',
};
