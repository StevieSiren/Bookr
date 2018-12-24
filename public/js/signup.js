var username = document.querySelector('#signup-username'),
    email = document.querySelector('#signup-email'),
    password = document.querySelector('#signup-password'),
    signupBtn = document.querySelector('#signup-btn');

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}



const getSignupData = () => {
    var newUser = new User(username.value, email.value, password.value);
    console.log(newUser);
};

// const submitOnEnter = (e) => {
//     e.preventDefault();
//     if(e.keyCode === 13) {
//         signupBtn.click();
//     }
//   }

// signupBtn.addEventListener('keyup', submitOnEnter);
signupBtn.addEventListener('click', getSignupData);

