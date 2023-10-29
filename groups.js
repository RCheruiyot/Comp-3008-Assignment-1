const groups = [
  { groupName: 'School', icon: 'school.png' },
  { groupName: 'Family', icon: 'family.png' },
  { groupName: 'Work', icon: 'work.png' },
];

const groupsList = document.getElementById('groups-list');
const addFriendsButton = document.getElementById('add-friends-button');

addFriendsButton.addEventListener('click', function () {
  window.location.href = 'adding_friends_page.html';
});

function createGroupElement(group) {
  const groupElement = document.createElement('li');
  groupElement.classList.add('group-item');
  const groupIcon = document.createElement('img');
  groupIcon.src = group.icon;
  const groupName = document.createElement('div');
  groupName.classList.add('group-name');
  groupName.innerHTML = group.groupName;

  groupElement.appendChild(groupIcon);
  groupElement.appendChild(groupName);

  groupElement.addEventListener('click', function () {
    window.location.href = 'in_groups.html';
  });

  return groupElement;
}

function displayGroups() {
  groupsList.innerHTML = '';
  groups.forEach((group) => {
    const groupElement = createGroupElement(group);
    groupsList.appendChild(groupElement);
  });
}

displayGroups();
