const submitBtn = document.getElementById('submit_pr')

const pr = document.getElementById('pr')
const workout = document.getElementById('workouts')
const proof = document.getElementById('fileInput')

const displayPr = document.getElementById('Personal_Records')



pr.addEventListener('change', checkEnableButton)
workout.addEventListener('change', checkEnableButton)
proof.addEventListener('change', checkEnableButton)

function checkEnableButton () {
  console.log(proof.files.length );
  submitBtn.disabled = !(
      pr.value && 
      workout.value !== 'Select Workout' &&
      proof.files.length > 0
   )
}


submitBtn.addEventListener("click", displayPR);

function displayPR (){
  const newDiv = document.createElement("div");

  newDiv.innerHTML= workout.value + ": " + pr.value + "<br>Here's the proof:" + proof.files +"<br><br>"

  displayPr.appendChild(newDiv);

}



