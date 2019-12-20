export const environment = {
  production: true,
  apiEndpoint: 'http://192.168.178.36:8080/api/',
  firebase: {
    apiKey: "AIzaSyAPzE0qA2f05-r_NCx57MTBJuCSSSi5yKc",
    authDomain: "brew-log-166f0.firebaseapp.com",
    databaseURL: "https://brew-log-166f0.firebaseio.com",
    projectId: "brew-log-166f0",
    storageBucket: "brew-log-166f0.appspot.com",
    messagingSenderId: "674089166660",
    appId: "1:674089166660:web:f1bb70c5a5f8810bc39911",
    isMock: function () {
      return false;
    }
  }
};
