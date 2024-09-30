var courses = [];
for(let i=0; i<=5; i++) {
    let course = prompt(`Course ${i}`);
    courses.push(course);
}
courses.forEach(course => {
    let edit = prompt("Edit course", course);

    if(edit !== "" && edit !== course) {
        courses.splice(i,1,edit);
    }
});

alert("Current courses " + courses.join(" "));