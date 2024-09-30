var courses = [];

let course_1 = prompt("Course 1");
let course_2 = prompt("Course 2");
let course_3 = prompt("Course 3");
let course_4 = prompt("Course 4");
let course_5 = prompt("Course 5");

courses.push(course_1);
courses.push(course_2);
courses.push(course_3);
courses.push(course_4);
courses.push(course_5);

courses.forEach(course => {
    let edit = prompt("Edit course", course);

    if(edit !== "" && edit !== course) {
        courses.splice(i,1,edit);
    }
});

alert("Current courses " + courses.join(" "));