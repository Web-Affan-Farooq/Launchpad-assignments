let calculateButton = document.querySelector(".calculate");

const calculatePercentage = (event) => {
    // Fetching marks from the input fields
    let marks1 = Number(document.querySelector("#marks-1").value);
    let marks2 = Number(document.querySelector("#marks-2").value);
    let marks3 = Number(document.querySelector("#marks-3").value);
    let marks4 = Number(document.querySelector("#marks-4").value);
    let marks5 = Number(document.querySelector("#marks-5").value);
    let totalMarks = Number(document.querySelector("#total-marks").value);

    // Check if all marks and totalMarks are valid
    if (marks1 !== 0 && marks2 !== 0 && marks3 !== 0 && marks4 !== 0 && marks5 !== 0 && totalMarks > 0) {
        let obtainedMarks = marks1 + marks2 + marks3 + marks4 + marks5;
        let percent = (obtainedMarks / totalMarks) * 100;

        let grade;

        // Using if-else for range-based grade calculation
        if (percent >= 90 && percent <= 100) {
            grade = "Grade A+";
        } else if (percent >= 75 && percent < 90) {
            grade = "Grade A";
        } else if (percent >= 60 && percent < 75) {
            grade = "Grade B";
        } else if (percent >= 45 && percent < 60) {
            grade = "Grade C";
        } else if (percent >= 30 && percent < 45) {
            grade = "Grade D";
        } else if (percent >= 0 && percent < 30) {
            grade = "Fail";
        } else {
            grade = "Invalid percentage"; // For any unexpected cases
        }

        // Display the percentage and grade to the user
        alert(`Percentage: ${percent.toFixed(2)}%`);
        alert(`Grade: ${grade}`);
    } else {
        // Alert user if they didn't fill in all fields correctly
        alert("Please fill in all fields correctly.");
    }
};

// Adding an event listener to the calculate button
calculateButton.addEventListener("click", calculatePercentage);
