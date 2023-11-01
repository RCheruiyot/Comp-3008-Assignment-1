// hardcoded 3 friend requests since there is no backend
const friendRequests = [
  { username: 'Dud', icon: 'assets/friend5.png' },
  { username: 'Manbear', icon: 'assets/friend6.jpg' },
  { username: 'Trevor', icon: 'assets/friend7.png' },
];

const requestsList = document.getElementById('requests-list');
const addButton = document.getElementById('add-button');
const searchInput = document.getElementById('search-input');

const allData = fetch('./data.json')
  .then(response => response.json());

addButton.addEventListener('click', function () {
  allData.then(data => {
    const searchedUsername = searchInput.value.trim();
    if (data.Friends[searchedUsername]) {
      alert("user is already friended");
    } else if (data.Users[searchedUsername]) {
      alert(`A friend request was sent to ${searchedUsername}`);
      displayFriendRequests();
    } else {
      alert("User does not exist");
    }
    searchInput.value = '';
  });
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
  requestElement.style.backgroundColor = '#ffecdd';
  requestElement.style.cursor = 'pointer';

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
  acceptButton.onclick = function () {
    alert(`${request.username} has been added to your friends list`);
    const index = friendRequests.findIndex(fr => fr.username === request.username);
    friendRequests.splice(index, 1);
    displayFriendRequests();
  };
  actionButtonsDiv.appendChild(acceptButton);

  const denyButton = document.createElement('button');
  denyButton.classList.add('deny');
  denyButton.innerHTML = 'Deny';
  denyButton.onclick = function () {
    alert(`${request.username}'s friend request has been denied`);
    const index = friendRequests.findIndex(fr => fr.username === request.username);
    friendRequests.splice(index, 1);
    displayFriendRequests();
  };
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
