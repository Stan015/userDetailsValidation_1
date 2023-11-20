alert("Welcome");
userDetailsVerify();
alert("Thank you. Goodbye.");

function userDetailsVerify() {
    let username = prompt("Enter your username."); //gets username input from user
    let usernameErrorMessage = "Please enter a valid username. Username must be greater than 3 or less 10 characters.";

    //validates username
    function validateUsername(username) {
        if (username === null) return false;

        while (username.length > 10 || username.length < 3) {
            username = prompt(`${usernameErrorMessage}`);
        } 

        return true;

    }
    validateUsername(username);
    //

    let password = prompt("Enter your password."); //gets Password input from user
    let passwordErrorMessage = "Please enter a valid password. Password must be greater than 6 characters.";

    //validates password
    function validatePassword(password) {
        if (password === null) return false;

        while (password.length  < 6) {
            password = prompt(`${passwordErrorMessage}`);
        } 

        return true;

    }
    validatePassword(password);
    //

    let passwordAgain = prompt("Enter your password again."); //Detect mismatched Password input from user
    let passwordMismatched= "Password did not match. Please enter your password correctly";

    //validates whether passord matched
    function confirmPasswordMatch(passwordAgain) {
        if (passwordAgain === null) return false;

        while (password !== passwordAgain) {
            passwordAgain = prompt(`${passwordMismatched}`)
        }
        return true;
    }
    confirmPasswordMatch(passwordAgain)
    //

        
    //Local user database
    const userLocalData = {
        "Adam02": {
            firstName: "Adam",
            lastName: "Musa",
            age: "24",
            password: "12345583"
        },

        "Oladipo6823": {
            firstName: "Oladipo",
            lastName: "Yemi",
            age: "30",
            password: "7890298353"
        },

        "Stan015": {
            firstName: "Stanley",
            lastName: "Azi",
            age: "100",
            password: "1234567823"
        },

        "Obi393": {
            firstName: "Obi",
            lastName: "Chinedu",
            age: "39",
            password: "12345678"
        }   
    
    }

    const userDetails = userLocalData[username];

    //checks if user exists in database
    if (!userDetails) {
        return alert(`User ${username} does not exist. Kindly register.`);
    }
    //

    //validate password from datatbase
    if(password !== userDetails.password) {
        return alert("Password is incorrect, start again with correct password");
    }
    //

    //display user details
    alert(`Showing details for ${username}: \n
        First Name: ${userDetails.firstName} \n
        Last Name: ${userDetails.lastName} \n
        Age: ${userDetails.age}
    `)

}
//
