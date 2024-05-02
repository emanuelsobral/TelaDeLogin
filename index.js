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
