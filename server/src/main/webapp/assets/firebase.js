(function() {
	window.brewlog_auth = window.brewlog_auth || {};

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAPzE0qA2f05-r_NCx57MTBJuCSSSi5yKc",
    authDomain: "brew-log-166f0.firebaseapp.com",
    databaseURL: "https://brew-log-166f0.firebaseio.com",
    projectId: "brew-log-166f0",
    storageBucket: "brew-log-166f0.appspot.com",
    messagingSenderId: "674089166660",
    appId: "1:674089166660:web:f1bb70c5a5f8810bc39911"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
     console.info(user);
  } else {
    // User is signed out.
    // ...
  }
});

	window.brewlog_auth.login = function login(email, password) {
		firebase.auth().signInWithEmailAndPassword(email, password).catch(
			function(error) {
		   	// Handle Errors here.
		   	var errorCode = error.code;
		   	var errorMessage = error.message;
		   // ...
		 });
	}

})();