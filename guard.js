//Guard
firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "logarRegistrar.html";
    }
});