//Logout

function Logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "/pages/logarRegistrar.html";
    }).catch((error) => {
        alert(getErrorMessage(error));
    });
}
