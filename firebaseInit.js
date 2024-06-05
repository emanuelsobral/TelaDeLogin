const firebaseConfig = {
    apiKey: "AIzaSyB4AFgkIO5oLqm4FPMbJ8aUCTFS0364Kw8",
    authDomain: "rainhadolar-6c525.firebaseapp.com",
    projectId: "rainhadolar-6c525",
    storageBucket: "rainhadolar-6c525.appspot.com",
    messagingSenderId: "1055489682379",
    appId: "1:1055489682379:web:f81f1c259e47579746244e"
  };

  firebase.initializeApp(firebaseConfig);

  var provider = new firebase.auth.GoogleAuthProvider();