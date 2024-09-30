var inputValue = "cloUd naTive computinG";

var capitalizedValue = inputValue.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "); 

console.log(capitalizedValue);