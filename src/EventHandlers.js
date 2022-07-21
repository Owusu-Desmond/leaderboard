const errContainer = document.querySelector(".error-message");

// clear the form
const clearForm = (form) => {
    form.elements.user.value = '';
    form.elements.score.value = '';
}

const displayError = (message) => {
    errContainer.innerHTML = message;
    // hide error massage 5seconds time
    setTimeout(() => {
        errContainer.innerHTML = '';
    }, 5000)
}

export { clearForm, displayError}