// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


//esto es lo que tenia realmente
//export const environment = {
 // production: false
//};
// conexion de fire base
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBCWf_-ZKZYdj8cjZPmaiSQRsLL7_ZCSzc",
  authDomain: "ionic-4-firebase-login-f8d8a.firebaseapp.com",
  databaseURL: "https://ionic-4-firebase-login-f8d8a.firebaseio.com",
  projectId: "ionic-4-firebase-login-f8d8a",
  storageBucket: "ionic-4-firebase-login-f8d8a.appspot.com",
  messagingSenderId: "143691030009",

  }
 };


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.