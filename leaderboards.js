// Sample leaderboard data
const people = [
    { name: 'Person 1', deadlift: 300, pushups: 50, pullups: 20, group: 'school' },
    { name: 'Person 2', deadlift: 250, pushups: 60, pullups: 10, group: 'family' },
    { name: 'Person 3', deadlift: 350, pushups: 40, pullups: 15, group: 'work' },
    // Add more people here
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
    profileImage.src = person.image; // Add the image URL for each person
    const profileInfo = document.createElement('div');
    profileInfo.classList.add('leaderboards-profile-info');
    profileInfo.innerHTML = `
        <p>${person.name}</p>
        <p>Deadlift: ${person.deadlift}</p>
        <p>Push-ups: ${person.pushups}</p>
        <p>Pull-ups: ${person.pullups}</p>
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