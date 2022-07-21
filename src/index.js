import './style.css';
import { trim } from 'lodash';
import API_URL from './api';
import { userDoNotExist, testUsername } from './Validation';
import { clearForm, displayError, renderAPI } from './EventHandlers';

const form = document.getElementById('form');

// fetch users with their scores from api
const getScores = async (API_URL) => {
  const response = await fetch(API_URL);
  const result = await response.json();
  return result.result;
};

// render data when page loads
document.addEventListener('DOMContentLoaded', async () => {
  const existingUsers = await getScores(API_URL);
  renderAPI(existingUsers);
});

form.onsubmit = async (event) => {
  event.preventDefault();
  const userData = {
    user: trim(form.elements.user.value),
    score: form.elements.score.value,
  };
  const existingUsers = await getScores(API_URL);
  // stop executing if there is an error
  if (!userDoNotExist(existingUsers, userData.user) && testUsername(userData.user)) {
    return;
  }
  // continue adding user when there is no validation error
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: { 'Content-type': 'application/json' },
  });
  if (response.ok) {
    clearForm(form);
    const sucess = document.querySelector('.success-message');
    sucess.innerHTML = 'You are added, refresh to see your great score!';
    setTimeout(() => {
      sucess.innerHTML = '';
    }, 5000);
  } else {
    displayError(`<span style="color: black;">HTTP-Error</span> : ${response.status}`);
  }
};
// render api when submit button is click
const refresh = document.getElementById('refresh');
refresh.onclick = async () => {
  // remove all already added to UI first to prevent data repeatition
  const allAddedData = document.querySelectorAll('table>tr');
  allAddedData.forEach((addData) => {
    addData.remove();
  });
  // load new data
  const existingUsers = await getScores(API_URL);
  renderAPI(existingUsers);
};