const groups = [
  { groupName: 'School' },
  { groupName: 'Family' },
  { groupName: 'Work' },
];

const groupsList = document.getElementById('groups-list');
const addFriendsButton = document.getElementById('add-friends-button');

addFriendsButton.addEventListener('click', function () {
  window.location.href = 'adding_friends_page.html';
});

function createGroupElement(group) {
  const groupElement = document.createElement('li');
  groupElement.classList.add('group-item');
  groupElement.style.backgroundColor = '#ffecdd';
  groupElement.style.cursor = 'pointer';
  const groupName = document.createElement('div');
  groupName.classList.add('group-name');
  groupName.innerHTML = group.groupName;

  groupElement.appendChild(groupName);

  groupElement.addEventListener('click', function () {
    window.location.href = `in_groups.html?${groupName.innerHTML}`;
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
