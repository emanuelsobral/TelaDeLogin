//autenticaçao login

function Login() {
    showLoading()
    const emailLogin = document.getElementById("emailLogin").value;
    const passwordLogin = document.getElementById("passwordLogin").value;

      firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin).then(response => {
        hideLoading()
        window.location.href = "/pages/home.html";
      }).catch(error => {
        hideLoading()
        alert(getErrorMessage(error));
      })
}

function getErrorMessage(error) {
    switch (error.code) {
        case "auth/wrong-password":
            return "Senha incorreta";
        case "auth/user-not-found":
            return "Usuário não encontrado";
        case "auth/invalid-email":
            return "E-mail inválido";
        case "auth/invalid-credential":
            return "Credenciais inválidas";
        case "auth/weak-password":
            return "Senha deve ter no minimo 6 caracteres";
        case "auth/email-already-in-use":
            return "E-mail já cadastrado";
        default:
            return error.message;
    }
}

  function signInWithGoogle() {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        window.location.href = "/pages/home.html";
      }).catch((error) => {
        console.error(error);
      });
  }

  function recoverPassword() {
    const email = document.getElementById('emailLogin');

    showLoading();
    firebase.auth().sendPasswordResetEmail(email.value).then(() => {
        hideLoading();
        alert('Email enviado com sucesso!');
    }).catch((error) => {
        hideLoading();
        alert(getErrorMessage(error));
    });
  }

  //autenticaçao Registro

  function Register() {
    showLoading()
    const emailRegister = document.getElementById("emailRegister").value;
    const passwordRegister = document.getElementById("passwordRegister").value;
    const nameRegister = document.getElementById("nameRegister").value;

    firebase.auth().createUserWithEmailAndPassword(emailRegister, passwordRegister).then(response => {
        hideLoading()
        firebase.auth().currentUser.updateProfile({
            displayName: nameRegister
        }).then(() => {
            window.location.href = "/pages/home.html";
        }).catch((error) => {
            hideLoading()
            alert(getErrorMessage(error));
        });
    }).catch(error => {
        hideLoading()
        alert(getErrorMessage(error));
    })
}