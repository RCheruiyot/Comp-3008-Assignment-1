const submitBtn = document.getElementById('submit_pr')

const pr = document.getElementById('pr')
const workout = document.getElementById('workouts')
const proof = document.getElementById('fileInput')

const displayPr = document.getElementById('personal-records') // Corrected ID

pr.addEventListener('change', checkEnableButton)
workout.addEventListener('change', checkEnableButton)
proof.addEventListener('change', checkEnableButton)

function checkEnableButton () {
  console.log(proof.files.length );
  submitBtn.disabled = !(
      pr.value && 
      workout.value !== 'Select workout' && // Corrected text
      proof.files.length > 0
   )
}

submitBtn.addEventListener("click", displayPR);
//To display the personal records
function displayPR (){
  const newDiv = document.createElement("div");
  const imageDisplay = document.createElement("img");

  //console.log(proof.files[0].name);
  
  if (proof.files.length > 0) {
    var file = proof.files[0];
    console.log(file.type)
    if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
        var reader = new FileReader();

        reader.onload = function(e) {
            imageDisplay.src = e.target.result;
            imageDisplay.style.height = "80px";
            imageDisplay.style.width = "80px";
            imageDisplay.style.marginRight = "50px";

        };

        reader.readAsDataURL(file);
    }
}

  newDiv.innerHTML= workout.value + ": " + pr.value + "<br>Here's the proof: <br>"
  newDiv.appendChild(imageDisplay);
  displayPr.appendChild(newDiv);
}