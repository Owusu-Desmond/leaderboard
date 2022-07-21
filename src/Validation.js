
/* Regular expression to test username

^ (?![0-9]) (?![_.]) (?!.*[_.]{2}) [a-zA-Z0-9._ ]+(?<![_.])$
 └─────┬───┘└───┬──┘ └─────┬─────┘ └─────┬─────┘ └───┬───┘
       │         │         │             │           no _ or . at the end
       │         │         │             │
       │         │         │            allowed characters
       │         │         │
       │         │         no __ or _. or ._ or .. inside
       │         │
       │         no _ or . at the beginning
       │
       username should not start with number
*/

const testUsername = (username) => {
    const regExp = /^(?![0-9])(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
    if(!regExp.test(username)){
        displayError("Invalid Username");
        return false;
    } else {
        return true;
    }
}

export {
    testUsername
}