// Sample leaderboard data
const people = [
    { name: 'GuyL', benchpress: 150, squat: 200, deadlift: 250, group: 'school', image: 'assets/friend1.jpg' },
    { name: 'GuyA', benchpress: 120, squat: 180, deadlift: 200, group: 'family', image: 'assets/friend2.jpg' },
    { name: 'GuyB', benchpress: 160, squat: 210, deadlift: 260, group: 'work', image: 'assets/friend3.jpg' },
    { name: 'GuyC', benchpress: 140, squat: 190, deadlift: 230, group: 'work', image: 'assets/friend4.jpg' },
    // Add more people here with their respective images
];

const exerciseFilter = document.getElementById('exercise-filter');
const groupFilter = document.getElementById('leaderboards-filter-group');
const filterButton = document.getElementById('leaderboards-filter-button');
const leaderboard = document.getElementById('leaderboards-leaderboard');

filterButton.addEventListener('click', filterLeaderboard);

function createProfileElement(person) {
    const profile = document.createElement('div');
    profile.classList.add('leaderboards-profile');
    const profileImage = document.createElement('img');
    profileImage.src = person.image; // Use the image property
    const profileInfo = document.createElement('div');
    profileInfo.classList.add('leaderboards-profile-info');
    profileInfo.innerHTML = `
        <p>${person.name}</p>
        <p>Bench Press: ${person.benchpress}</p>
        <p>Squats: ${person.squat}</p>
        <p>Deadlift: ${person.deadlift}</p>
        <p>Group: ${person.group}</p>
    `;
    profile.appendChild(profileImage);
    profile.appendChild(profileInfo);
    return profile;
}

function filterLeaderboard() {
    const exerciseValue = exerciseFilter.value;
    const groupValue = groupFilter.value;
    const filteredPeople = people
        .filter((person) => exerciseValue === 'all' || person[exerciseValue] > 0)
        .filter((person) => groupValue === 'all' || person.group === groupValue);

    // Sort by exercise value in descending order
    filteredPeople.sort((a, b) => b[exerciseValue] - a[exerciseValue]);

    displayLeaderboard(filteredPeople);
}

function displayLeaderboard(people) {
    leaderboard.innerHTML = '';
    people.forEach((person) => {
        const profile = createProfileElement(person);
        leaderboard.appendChild(profile);
    });
}

// Initial leaderboard generation
displayLeaderboard(people);