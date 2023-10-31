// Sample friend requests data
const friendRequests = [
  { username: 'Dud', icon: 'path_to_icon.png' },
  { username: 'Manbear', icon: 'path_to_icon.png' },
  { username: 'Trevor', icon: 'path_to_icon.png' },
];

const requestsList = document.getElementById('requests-list');
const addButton = document.getElementById('add-button');
const searchInput = document.getElementById('search-input');

addButton.addEventListener('click', function () {
  searchInput.value = '';
});

searchInput.addEventListener('input', function () {
  if (searchInput.value.trim() !== '') {
    addButton.removeAttribute('disabled');
  } else {
    addButton.setAttribute('disabled', 'true');
  }
});

function createFriendRequestElement(request) {
  const requestElement = document.createElement('li');
  requestElement.classList.add('request-item');

  const userInfoDiv = document.createElement('div');
  userInfoDiv.classList.add('user-info');

  const userIcon = document.createElement('img');
  userIcon.src = request.icon;
  userInfoDiv.appendChild(userIcon);

  const username = document.createElement('span');
  username.innerHTML = request.username;
  userInfoDiv.appendChild(username);

  requestElement.appendChild(userInfoDiv);

  const actionButtonsDiv = document.createElement('div');
  actionButtonsDiv.classList.add('action-buttons');

  const acceptButton = document.createElement('button');
  acceptButton.classList.add('accept');
  acceptButton.innerHTML = 'Accept';
  actionButtonsDiv.appendChild(acceptButton);

  const denyButton = document.createElement('button');
  denyButton.classList.add('deny');
  denyButton.innerHTML = 'Deny';
  actionButtonsDiv.appendChild(denyButton);

  requestElement.appendChild(actionButtonsDiv);

  return requestElement;
}

function displayFriendRequests() {
  requestsList.innerHTML = '';
  friendRequests.forEach((request) => {
    const requestElement = createFriendRequestElement(request);
    requestsList.appendChild(requestElement);
  });
}

displayFriendRequests();
