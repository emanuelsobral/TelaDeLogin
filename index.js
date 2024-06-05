//Animation and Responsive Login

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const RegisterSwitch = document.getElementsByClassName('form-container sign-in-container')[0];

let isResponsive = window.matchMedia("(max-width: 768px)").matches;

const updateEventListeners = () => {
    if (isResponsive) {
        signUpButton.removeEventListener('click', nonResponsiveSignUp);
        signInButton.removeEventListener('click', nonResponsiveSignIn);

        signUpButton.addEventListener('click', responsiveSignUp);
        signInButton.addEventListener('click', responsiveSignIn);
    } else {
        signUpButton.removeEventListener('click', responsiveSignUp);
        signInButton.removeEventListener('click', responsiveSignIn);

        signUpButton.addEventListener('click', nonResponsiveSignUp);
        signInButton.addEventListener('click', nonResponsiveSignIn);
    }
};

const nonResponsiveSignUp = () => {
    container.classList.add("right-panel-active");
};

const nonResponsiveSignIn = () => {
    container.classList.remove("right-panel-active");
};

const responsiveSignUp = () => {
    RegisterSwitch.classList.remove('form-container');
    RegisterSwitch.classList.add('form-container-responsive');
};

const responsiveSignIn = () => {
    RegisterSwitch.classList.remove('form-container-responsive');
    RegisterSwitch.classList.add('form-container');
};

window.addEventListener('resize', () => {
    isResponsive = window.matchMedia("(max-width: 768px)").matches;
    updateEventListeners();
});

updateEventListeners();

//autenticaçao login

function Login() {
    const emailLogin = document.getElementById("emailLogin").value;
    const passwordLogin = document.getElementById("passwordLogin").value;

      firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin).then(response => {
        window.location.href = "/pages/home.html";
      }).catch(error => {
          alert(getErrorMessage(error))
      })
}

function getErrorMessage(error) {
    switch (error.code) {
        case 'auth/user-not-found':
            return 'Usuário não encontrado';
        case 'auth/wrong-password':
            return 'Senha incorreta';
        case 'auth/invalid-email':
            return 'Email inválido';
        default:
            return 'Erro desconhecido';
    }
}

  function signInWithGoogle() {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        window.location.href = "home.html";
      }).catch((error) => {
        console.error(error);
      });
  }
