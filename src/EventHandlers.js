const errContainer = document.querySelector('.error-message');

// clear the form
const clearForm = (form) => {
  form.elements.user.value = '';
  form.elements.score.value = '';
};

const displayError = (message) => {
  errContainer.innerHTML = message;
  // hide error massage 5seconds time
  setTimeout(() => {
    errContainer.innerHTML = '';
  }, 5000);
};

// add data to table
const addData = (existingUser) => {
  const table = document.querySelector('table');
  const tr = document.createElement('tr');
  const trContent = `<td>${existingUser.user}</td><td>${existingUser.score}</td>`;
  tr.innerHTML = trContent;
  table.appendChild(tr);
};

// loop through existing users from api and add to the table
const renderAPI = (existingUsers) => {
  existingUsers.forEach((existingUser) => {
    addData(existingUser);
  });
};

export { clearForm, displayError, renderAPI };