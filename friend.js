//Get the name of the friend from the url
const friendName = window.location.search.slice(1);

//Add the name of the friend below the profile picture as a header
const groupNameHeader = document.getElementById("name");
var headerElement = document.createElement("h2");
headerElement.innerText = friendName;
groupNameHeader.appendChild(headerElement);

const image = document.getElementById('image');
const liftsList = document.getElementById('lifts-list');

//Get the lifts this friend has uploaded and display them
fetch('./data.json')
.then(response => response.json())
.then(data => {
    const friendsData = data.Friends[friendName];
    const friendsLifts = friendsData.lifts;
    
    const profilePic = new Image();
    profilePic.src = friendsData.profilePicture;
    profilePic.classList.add("profile-picture");
    image.appendChild(profilePic);
    
    liftsList.innerHTML = '';
    for (const lift in friendsLifts) {
        const liftElement = createLiftElement(lift);
        liftsList.appendChild(liftElement);
    }

    function createLiftElement(lift) {
        const liftElement = document.createElement('li');
        liftElement.classList.add('lift-item');
        
        //Create the button with the dropdown
        const dropdownButton = document.createElement('button');
        dropdownButton.classList.add("down-button");
        dropdownButton.innerText = lift + ": " + friendsLifts[lift] + " lbs";
        liftElement.appendChild(dropdownButton);

        //Create the dropdown part on the button with a video inside (image instead)
        const videoDiv = document.createElement('div');
        videoDiv.classList.add("dropdown-content");
        const imageElement = document.createElement('img');
  
        //3 images from assests that are not unique to a user since video was not possible
        if (lift == "bench press") {
          imageElement.src = "assets/bench_press.jpg";
        } else if (lift == "squat") {
          imageElement.src = "assets/squat.jpg";
        } else if (lift == "deadlift") {
          imageElement.src = "assets/deadlift.jpg";
        }
        
        videoDiv.appendChild(imageElement);
        liftElement.appendChild(videoDiv);

        dropdownButton.addEventListener("click", function() {
            if (videoDiv.style.display == "none" || videoDiv.style.display == "") {
              videoDiv.style.display = "block";
            } else {
              videoDiv.style.display = "none";
            }
          });

        return liftElement;
    }
  })