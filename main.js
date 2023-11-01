const submitBtn = document.getElementById('submit_pr');
const pr = document.getElementById('pr');
const workout = document.getElementById('workouts');
const proof = document.getElementById('fileInput');
const displayPr = document.getElementById('personal-records');

submitBtn.classList.add('disabled');

pr.addEventListener('change', checkEnableButton);
workout.addEventListener('change', checkEnableButton);
proof.addEventListener('change', checkEnableButton);

let personalRecords = {};

function checkEnableButton() {
  const submitBtn = document.getElementById('submit_pr');
  const pr = document.getElementById('pr');
  const workout = document.getElementById('workouts');
  const proof = document.getElementById('fileInput');
  const selectedWorkout = workout.value;

  // Check if all three requirements are met
  const isPrValid = pr.value.trim() !== ''; // Check if the personal record field is not empty
  const isWorkoutSelected = selectedWorkout !== 'Select workout'; // Check if a workout is selected
  const isProofUploaded = proof.files.length > 0; // Check if an image is uploaded

  if (isPrValid && isWorkoutSelected && isProofUploaded) {
      submitBtn.disabled = false;
      submitBtn.classList.remove('disabled');
  } else {
      submitBtn.disabled = true;
      submitBtn.classList.add('disabled');
  }
}

// Add event listeners for input elements
pr.addEventListener('input', checkEnableButton); // Listen to input changes
workout.addEventListener('change', checkEnableButton); // Listen to select changes
proof.addEventListener('change', checkEnableButton); // Listen to file input changes

submitBtn.addEventListener("click", displayPR);

function displayPR() {
  const workoutType = workout.value;
  const currentPR = pr.value;

  // Create an object URL for the uploaded proof
  const proofURL = URL.createObjectURL(proof.files[0]);

  // Check if the workout already has a record
  if (personalRecords[workoutType]) {
    // Update the record whether it's higher or lower
    personalRecords[workoutType] = {
      record: currentPR,
      proof: proofURL
    };
  } else {
    personalRecords[workoutType] = {
      record: currentPR,
      proof: proofURL
    };
  }

  updateDisplayedRecords();
}

function updateDisplayedRecords() {
  // Clear previous records
  displayPr.innerHTML = "<h2 class='personal-record-h2'>Personal Records:</h2>";

  for (let workoutType in personalRecords) {
    const newDiv = document.createElement("div");
    if (workout.value === 'Push-ups' || workout.value === 'Pull-ups') {
      newDiv.innerHTML = workoutType + ": " + personalRecords[workoutType].record + "<br>Here's the proof:<br>";
    } else {
      newDiv.innerHTML = workoutType + ": " + personalRecords[workoutType].record + " lbs" + "<br>Here's the proof:<br>";
    }

    // Determine if it's an image or video and create the corresponding HTML element
    if (proof.files[0] && proof.files[0].type.startsWith("image/")) {
      const img = document.createElement("img");
      img.src = personalRecords[workoutType].proof;
      img.alt = "Proof of " + workoutType;
      img.style.width = '100%';
      newDiv.appendChild(img);
    } else if (proof.files[0] && proof.files[0].type.startsWith("video/")) {
      const video = document.createElement("video");
      video.src = personalRecords[workoutType].proof;
      video.controls = true;
      video.style.width = '100%';
      newDiv.appendChild(video);
    }

    newDiv.appendChild(document.createElement("br"));
    newDiv.appendChild(document.createElement("br"));

    displayPr.appendChild(newDiv);
  }
}




