/*
 * 3alsari3 React Native App for ios
 * authored by Esslam Emad
 * All Rights Reserved For AlyomHost For It Solutions
 */
'use strict'
import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
import { L } from '../../../Config';
// import I18n from '../../../I18n';

// GuideLine sizes are based on standard iphone 6
const guidelineBaseWidth = 414
const guidelineBaseHieght = 736

export const scale = size =>
  width * (size / 100)
export const verticalScale = size =>
  height * (size / 100)
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor
export const geDinarOneMedium = 'GE-Dinar-One-Medium';
//export const DroidKufiBold = 'DroidKufi-Bold';
export const primaryColor = '#51b0ca'
//export const secondaryColor = '#9e55b8'
const styles = StyleSheet.create(
  {
    noBorder: {
      borderTopWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
    },
    thinSeperator: {
      height: verticalScale(0.1),
      backgroundColor: '#d3d3d3',
      width: scale(90),
      alignSelf: 'center',
      marginVertical: verticalScale(2)
    },
    fontBold: {
      fontFamily: DroidKufiBold,
      fontSize: 12,
    },
    langButton: {
      width: scale(35), borderColor: '#fff', alignSelf: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      borderRadius: 0, borderWidth: 0
    },
    tabBarStyle: {
      height:verticalScale(8),
      // flexDirection: 'row',
      // flex: 1,
      // justifyContent: 'space-between',
      // flexGrow: ,
      // flexShrink:0
      // flexBasis: 1,
      // width: scale(100),
      // borderTopColor: '#ddd',
      borderTopWidth: 0,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 24,
      backgroundColor: '#fff', // invisible color
    },
    tabStyle: {
      // width: scale(25),
      alignItems: 'center',
      justifyContent: 'center'
    },
    brandImage: {
      width: scale(45),
      height: verticalScale(22.5),
      // marginBottom: verticalScale(2),
      resizeMode: 'cover'
    },
    brandImageContainer: {
      borderWidth: 1.5,
      borderColor: 'rgba(140,74,164,0.6)',
      marginBottom: verticalScale(1.5
      )
    },
    tabText: {
      fontFamily: DroidKufi,
      fontSize: moderateScale(4),
      // color: "#1b1b1b"
      top: -8
    },
    tabactive: {
      fontFamily: DroidKufi,
      fontSize: moderateScale(4),
      color: primaryColor
    },
    tabIcon: {
      fontSize: moderateScale(9)
    },
    fontRegular: {
      fontFamily: DroidKufi,
      fontSize: 12,
    },
    routernavigationBarStyle: {
      backgroundColor: primaryColor,
    },
    routerTitleStyle: {
      color: '#fff',
      fontSize: 15,
      fontFamily: DroidKufiBold
    },
    headerText: {
      fontFamily: DroidKufi,
      fontSize: 14,
      width: scale(72),
      color: '#fff',
      textAlign: 'center',
      // borderColor: '#00f',
      // borderWidth: 1
    },
    headerBack: {
      width: scale(15)
    },
    backButtonIcon: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 25,
      transform: ([{ scaleX: L('scaleLang') }])
    },
    titleStyle: {
      color: '#fff',
      borderBottomColor: '#fff',
      borderBottomWidth: 1,
      paddingBottom: verticalScale(3),
      // fontWeight: 'bold',
      fontSize: 20,
      marginBottom: verticalScale(5),
    },
    inputAuthContainer: {
      backgroundColor: '#fff',
      width: scale(90),
      marginBottom: verticalScale(2.5),
      borderWidth: 1,
      borderRadius: 0,
      borderColor: '#d3d3d3',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      alignSelf: 'center'
    },
    inputLabel: {
      fontSize: moderateScale(5),
      fontFamily: DroidKufi,
      color: primaryColor
    },
    buttonStyle: {
      borderRadius: 0,
      width: scale(90),
      backgroundColor: primaryColor,
      marginTop: verticalScale(1),
      justifyContent: 'center',
      alignSelf: 'center',
      textAlign: 'center',
      borderRadius: moderateScale(4),
      elevation: 0,
      height: verticalScale(8)
    },
    buttonStyle2: {
      borderRadius: 0,
      width: scale(90),
      backgroundColor: primaryColor,
      marginTop: verticalScale(1),
      justifyContent: 'center',
      alignSelf: 'center',
      textAlign: 'center',
      borderRadius: moderateScale(10),
      height: verticalScale(8)
    },
    buttonStyle3: {
      borderRadius: 0,
      width: scale(90),
      backgroundColor: 'transparent',
      marginTop: verticalScale(1),
      justifyContent: 'center',
      alignSelf: 'center',
      textAlign: 'center',
      borderRadius: moderateScale(4),
      borderColor: primaryColor,
      height: verticalScale(8)
    },
    buttonTextStyle: {
      fontFamily: DroidKufi,
      color: '#fff',
      fontSize: moderateScale(5),
      textAlign: 'center',
    },
    listSideMenu: {
      borderBottomColor: 'transparent',
      alignItems: 'center',
      alignContent: 'center',
    },
    sideMneuText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: scale(2),
      marginLeft: scale(2)
    },
    textPageContent: {
      color: '#3b3b3b',
      fontSize: 14,
      fontWeight: 'normal',
      textAlign: 'center'
    },
    contactText: {
      color: '#ffff',
      fontWeight: 'normal'
    },
    contactIcon: {
      padding: moderateScale(2),
      borderRadius: moderateScale(6),
      color: '#fff',
      backgroundColor: '#f48221',
      justifyContent: 'center',
      alignContent: 'center',
      alignSelf: 'center'
    },
    commentRow: {
      alignSelf: 'center',
      flexDirection: 'row',
      width: scale(42),
      justifyContent: 'space-between',
      marginBottom: verticalScale(2),
      // backgroundColor: 'red'
    },
    //yahya
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: '#f00'
    },
    InputIcon: {
      color: primaryColor,
      fontSize: moderateScale(7),
      // marginRight: 7.5,
      // marginLeft: 7.5,
    },
    imageContainer: {
      justifyContent: 'center',
      alignSelf: 'center',
      paddingBottom: verticalScale(10),
      paddingTop: verticalScale(10),
      borderBottomWidth: 0
    },
    lbgImage: {
      width: moderateScale(90),
      height: moderateScale(40),
      resizeMode: "contain",
    },
    textContainer: {
      borderBottomWidth: 0,
      textAlign: 'center',
      justifyContent: 'center'
    },
    solidText: {
      color: primaryColor,
      fontFamily: DroidKufi,
      fontSize: 13,
      // textAlign: 'right',
      // borderWidth: 2,
      // borderColor: '#ff0',
      // flex: 1,
      textAlign: 'center'
    },
    touchableText: {
      color: '#454545',
      fontFamily: DroidKufi,
      textAlign: L('textAlignLeft'),
      fontSize: moderateScale(5),
    },
    bgLogo: {
      position: 'absolute',
      right: moderateScale(75),
      zIndex: -1
    },
    modalContainerlStyle: {
      position: 'relative',
      left: 0,
      right: 0,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
      zIndex: -1,
      flex: 1,

    },
    modalStyle: {
      justifyContent: 'center',
      alignSelf: 'center',
      zIndex: 11,
      backgroundColor: '#ffffff',
      padding: 15,
      borderRadius: moderateScale(5)
    },
    dismissModalOverlayWelcome: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 111,
      flex: 1,
      // backgroundColor: '#f00'
    },
    headerStyle: {
      backgroundColor: primaryColor
    },
    registerContainer: {
      paddingVertical: moderateScale(10)
    },
    inputField: {
      textAlign: L('textAlignRight'),
      fontSize: moderateScale(5),
      flex: 1,
      fontFamily: DroidKufi
    },
    textAreaContainer: {
      borderBottomWidth: 0,
      width: scale(90),
      marginBottom: verticalScale(3),

    },
    textAreaField: {
      borderColor: '#c1c1c1',
      flex: 1,
      textAlign: L('textAlignRight'),
      fontSize: moderateScale(5),
      fontFamily: DroidKufi
    },
    photoRow: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-evenly',
      // borderColor: '#00f',
      borderWidth: 2,
      // backgroundColor: '#f00',
      width: scale(90),
    },
    photoUpload: {
      position: 'relative',
      flexDirection: 'row',
      alignSelf: 'center',

      // borderWidth:1,
      // borderColor: '#0f0',
      justifyContent: 'flex-start'
      // width: scale(10),
    },
    uploadText: {
      position: 'relative',
      top: 0,
      zIndex: 11,
      alignSelf: 'center',
      fontSize: 11,
      color: '#828282',
      fontFamily: DroidKufi,
      textAlign: 'center',
      lineHeight: moderateScale(10)
    },
    photo: {
      alignSelf: 'center',
      width: scale(25),
      height: scale(25),
      borderColor: '#c1c1c1',
      borderWidth: 1,
      backgroundColor: '#f5f5f5',
    },
    aboutText: {
      fontFamily: DroidKufi,
      color: '#616161',
      textAlign: 'center',
      lineHeight: verticalScale(5),
      fontSize: 15
    },
    memberIcon: {
      color: primaryColor,
      right: 0,
      fontSize: moderateScale(5),
      // marginTop: 3,
      marginRight: 5,
      // alignSelf: 'flex-end'
    },
    productContainer: {
      borderWidth: 0.2,
      borderColor: secondaryColor,
      marginBottom: verticalScale(1.5),
      flexDirection: 'column',
      // padding: moderateScale(5),
      borderRadius: moderateScale(2),
      width: scale(46),
      alignItems: 'center',
      overflow: 'hidden',
      paddingTop: verticalScale(2)
    },
    productImage: {
      height: verticalScale(20),
      width: scale(40),
    },
    productDetails: {
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
      width: scale(46),
      padding: moderateScale(3),
      marginTop: verticalScale(2)
    },
  })

export default styles;
