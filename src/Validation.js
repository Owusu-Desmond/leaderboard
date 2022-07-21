import { displayError } from './EventHandlers';

// check if username already added
const userDoNotExist = (existingUsers, user) => {
  let isUserExist;
  existingUsers.forEach((existingUser) => {
    if (existingUser.user === user) {
      displayError('Username already exit');
      isUserExist = true;
    }
  });
  if (isUserExist) {
    return false;
  }
  return true;
};

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
  const regExp = /^(?![0-9])(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  if (!regExp.test(username)) {
    displayError('Invalid Username');
    return false;
  }
  return true;
};

export {
  testUsername, userDoNotExist,
};