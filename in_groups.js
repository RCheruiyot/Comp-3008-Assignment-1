//Get the name of the group from the url
const groupName = window.location.search.slice(1);

//Add the name of the group to the top of the page as a header
const groupNameHeader = document.getElementById("group-name-header");
var headerElement = document.createElement("h2");
headerElement.innerText = groupName;
groupNameHeader.appendChild(headerElement);

const friendsList = document.getElementById('friends-list');

//Get the names of the friends in the group and generate html list element for each friend
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const friendsInGroup = data.Groups[groupName];
    const allFriendsData = data.Friends;
    
    friendsList.innerHTML = '';
    friendsInGroup.forEach((friendName) => {
      const friendData = allFriendsData[friendName];
      const friendElement = createFriendElement(friendData);
      friendsList.appendChild(friendElement);
    });

    function createFriendElement(friend) {
      const friendElement = document.createElement('li');
      friendElement.classList.add('friend-item');
      friendElement.style.backgroundColor = '#ffecdd';
      friendElement.style.cursor = 'pointer';

      const friendImage = new Image();
      friendImage.classList.add('friend-image');
      friendImage.src = friend.profilePicture;
  
      const friendName = document.createElement('div');
      friendName.classList.add('friend-name');
      friendName.innerHTML = friend.name;
    
      friendElement.appendChild(friendImage);
      friendElement.appendChild(friendName);
      
    
      friendElement.addEventListener('click', function () {
        window.location.href = `friend.html?${friend.name}`; 
      });
    
      return friendElement;
    }
  })