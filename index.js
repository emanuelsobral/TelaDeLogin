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

//Validation Fields Register

function validateFiels() {
    const emailValidregister = isEmailValidregister();
    const passwordValidregister = isPasswordValidRegister();
    const nameRegister = isNameValidRegister();
    document.getElementById('registerButton').disabled = !emailValidregister | !passwordValidregister | !nameRegister;

    toggleRegisterError();
}

function isEmailValidregister() {
    const emailregister = document.getElementById("emailRegister").value;

    if (!emailregister) {
        return false;
    }
    return validateEmailregister(emailregister);
}

function isPasswordValidRegister() {
    const passwordRegister = document.getElementById("passwordRegister").value;
    const confirmPasswordRegister = document.getElementById("confirmPassword").value;

    if (!passwordRegister ||!confirmPasswordRegister) {
        return false;
    }
    if (!passwordRegister === confirmPasswordRegister) {
        return false;
    }
    if (passwordRegister === confirmPasswordRegister) {
        return true;
    }

}

function toggleRegisterError() {
    const passwordRegister = document.getElementById("passwordRegister").value;
    const confirmPasswordRegister = document.getElementById("confirmPassword").value;
    const emailregister = document.getElementById("emailRegister").value;
    const nameRegister = document.getElementById("nameRegister").value;

    if ((validateEmailregister(emailregister))) {
        document.getElementById("ErroEmail").style.display = "none";
    } else {
        document.getElementById("ErroEmail").style.display = "block";
    }

    if (passwordRegister === confirmPasswordRegister) {
        document.getElementById("ErroPassword").style.display = "none";
    } else {
        document.getElementById("ErroPassword").style.display = "block";
    }

    if (!emailregister || !passwordValidregister || !nameRegister) {
        document.getElementById("ErroFields").style.display = "block";
    } else {
        document.getElementById("ErroFields").style.display = "none";
    }

}

function isNameValidRegister() {
    const nameRegister = document.getElementById("nameRegister").value;

    if (!nameRegister) {
        return false;
    }
    return true;
}

function validateEmailregister(emailregister) 
{
    return  /\S+@\S+\.\S+/.test(emailregister);;
}

//Validation Fields Login

function validateFielsLogin() {
    const emailValidLogin = isEmailValidLogin();
    const passwordValidLogin = isPasswordValidLogin();
    document.getElementById('loginButton').disabled = !emailValidLogin | !passwordValidLogin;

    document.getElementById('forgetPassword').disabled =!emailValidLogin;

    toggleLoginError();
}

function isEmailValidLogin() {
    const emailLogin = document.getElementById("emailLogin").value;

    if (!emailLogin) {
        return false;
    }
    return validateEmailLogin(emailLogin);
}



function isPasswordValidLogin() {
    const passwordLogin = document.getElementById("passwordLogin").value;

    if (!passwordLogin) {
        return false;
    }
    return true;
}

function toggleLoginError() {
    const passwordLogin = document.getElementById("passwordLogin").value;
    const emailLogin = document.getElementById("emailLogin").value;

    if (!passwordLogin ||!emailLogin) {
        document.getElementById("ErroLogin").style.display = "block";
    } else {
        document.getElementById("ErroLogin").style.display = "none";
    }
}

function validateEmailLogin(emailLogin)
 {
    return  /\S+@\S+\.\S+/.test(emailLogin);;
}