import RNRestart from 'react-native-restart';
// import { NetInfo, AsyncStorage, Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import I18n, { getLanguages } from 'react-native-i18n';
import { I18nManager } from 'react-native'

// Enable fallbacks if you want `en-US`
// and `en-GB` to fallback to `en`
I18n.fallbacks = true;

I18n.translations = {
    'en': require('./Localization/en.json'),
    'ar': require('./Localization/ar.json'),
};
let languageSession = AsyncStorage.getItem('language')
export let language
// console.log(typeof languageSession, languageSession);

if (languageSession != null && 'string' == typeof languageSession) {
    // alert(1)
    language = 'en'
    I18nManager.forceRTL(false);
    I18n.local = 'en'
} else {
    // alert(2)
    language = 'ar'
    I18nManager.forceRTL(true);
    I18n.local = 'ar'
}



// var words=require('langs/ar.js')

// export let base = 'http://t8.someotherhost.com/inventory/public/'
// export let base = 'http://afnan.t2.someotherhost.com/'

export let baseUrl = 'https://3alsri3.com/' + I18n.local + '/mobile/'
// export let baseUrl = base + 'api/v1/'
export const baseUploadUrl =  'https://adasatik.com/upload/'
// export const commonheaders = {
//     'Accept': 'application/json',
// }
// export const headers={...commonheaders,...{"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"}}
export const headers = {
    'Accept': 'application/json',
    // 'content-type': 'multipart/form-data',
    'client': 'f229b09fa84056aba7e59b6d9d6255a3a8a50d82',
    'secret': 'a9e85ab9c54b2cc7755ee1f9f18d0c033dba1abb',
}
export function changeLng(lang, flag) {
    AsyncStorage.setItem('language', lang)
    I18n.local = lang
    baseUrl = 'https://3alsri3.com/' + lang + '/mobile/'
    if (lang == 'ar') {
        I18nManager.forceRTL(true);
    } else if (lang == 'en') {
        I18nManager.forceRTL(false);
    }

    I18n.local = lang
    if (flag) {
        RNRestart.Restart()
    }

}

export function L(key) {
    let word = I18n.t(key, { locale: I18n.local })
    // let word = I18n.t(key, { locale: 'ar' })
    return word
}