const submitBtn = document.getElementById('submit_pr');
const pr = document.getElementById('pr');
const workout = document.getElementById('workouts');
const proof = document.getElementById('fileInput');
const displayPr = document.getElementById('personal-records');

pr.addEventListener('change', checkEnableButton);
workout.addEventListener('change', checkEnableButton);
proof.addEventListener('change', checkEnableButton);

let personalRecords = {};

function checkEnableButton() {
    submitBtn.disabled = !(
        pr.value &&
        workout.value !== 'Select workout' &&
        proof.files.length > 0
    );
}

submitBtn.addEventListener("click", displayPR);

function displayPR() {
  const workoutType = workout.value;
  const currentPR = pr.value;

  // Create an object URL for the uploaded proof
  const proofURL = URL.createObjectURL(proof.files[0]);

  // Check if the workout already has a record and if the new record is greater than the previous
  if (!personalRecords[workoutType] || currentPR > personalRecords[workoutType]) {
      personalRecords[workoutType] = {
          record: currentPR,
          proof: proofURL
      };
      updateDisplayedRecords();
  }
}

function updateDisplayedRecords() {
  // Clear previous records
  displayPr.innerHTML = "";

  for (let workoutType in personalRecords) {
      const newDiv = document.createElement("div");
      if (workout.value == 'Push-ups' || workout.value == 'Pull-ups') {
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