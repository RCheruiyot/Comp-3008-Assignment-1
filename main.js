const submitBtn = document.getElementById('submit_pr')

const pr = document.getElementById('pr')
const workout = document.getElementById('workouts')
const proof = document.getElementById('fileInput')

const displayPr = document.getElementById('Personal_Records')

const profile_page_div = document.getElementById('profile_page_div')
const groups_page_div = document.getElementById('profile_page_div')
const leaderboard_div = document.getElementById('profile_page_div')


const profile_page_btn = document.getElementById('profile_page')
const groups_page_btn = document.getElementById('groups_page')
const leaderboard_btn = document.getElementById('leaderboard')

profile_page_div.style.display = "block"; 
groups_page_div.style.display = "block"; 
leaderboard_div.style.display = "block"; 

profile_page_btn.addEventListener("click", function() {
  //profile_page_div.style.display = "block"; 
  groups_page_div.style.display = "none"; 
  leaderboard_div.style.display = "none"; 
  
});
groups_page_btn.addEventListener("click", function() {
  //groups_page_div.style.display = "block"; 
  profile_page_div.style.display = "none"; 
  //leaderboard_div.style.display = "none"; 
});
leaderboard_btn.addEventListener("click", function() {
  //profile_page_div.style.display = "block"; 
  leaderboard_div.style.display = "block"; 
  //groups_page_div.style.display = "none"; 
});

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



