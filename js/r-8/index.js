let name = prompt("Enter your name ");
let dobDate = prompt("Enter your Date of Birth (date only, e.g., '18')");
let dobMonth = prompt("Enter your Date of Birth (month only, e.g., '08')");
let dobYear = prompt("Enter your Date of Birth (year only, e.g., '2004')");

let now = new Date();

let dob = new Date(`${dobYear}-${dobMonth}-${dobDate}`);

let currentHour = now.getHours();
let greeting;

if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning";
} else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good Afternoon";
} else if (currentHour >= 17 && currentHour < 21) {
    greeting = "Good Evening";
} else {
    greeting = "Good Night";
}

console.log(`Hello ${name}, ${greeting}`);

let dobInPST = new Date(dob.getTime() + 5 * 60 * 60 * 1000);
console.log(`Your DOB is ${dobInPST.toISOString().split('T')[0]} in Pakistan Standard Time`);

let ageDiffMs = now - dob;
let ageDate = new Date(ageDiffMs); 

let ageYears = now.getFullYear() - dob.getFullYear();
let ageMonths = now.getMonth() - dob.getMonth();
if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
}
let ageDays = now.getDate() - dob.getDate();
if (ageDays < 0) {
    ageMonths--;
    let prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    ageDays += prevMonth.getDate();
}

let ageHours = ageDate.getUTCHours();
let ageMinutes = ageDate.getUTCMinutes();
let ageSeconds = ageDate.getUTCSeconds();

console.log(`You are ${ageYears} years, ${ageMonths} months, ${ageDays} days, ${ageHours} hours, ${ageMinutes} minutes, ${ageSeconds} seconds old`);

// Step 7: Calculate the age in days
let ageInDays = Math.floor(ageDiffMs / (1000 * 60 * 60 * 24));
console.log(`Your Age in Days: ${ageInDays}`);

let nextBirthday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
if (now > nextBirthday) {
    nextBirthday.setFullYear(now.getFullYear() + 1); // If birthday has already passed this year
}

let timeLeftMs = nextBirthday - now;
if (timeLeftMs > 0) {
    let timeLeftDays = Math.floor(timeLeftMs / (1000 * 60 * 60 * 24));
    let timeLeftHours = Math.floor((timeLeftMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let timeLeftMinutes = Math.floor((timeLeftMs % (1000 * 60 * 60)) / (1000 * 60));
    let timeLeftSeconds = Math.floor((timeLeftMs % (1000 * 60)) / 1000);

    console.log(`How much time left in your next birthday? ${timeLeftDays} days, ${timeLeftHours} hours, ${timeLeftMinutes} minutes, ${timeLeftSeconds} seconds`);
} else {
    console.log(`Happy Birthday ${name}! Today is your ${ageYears + 1}th Birthday`);
}
