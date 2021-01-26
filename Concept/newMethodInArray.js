const course = ["js", "php", "c++"];

Array.prototype.map2 = function (callback) {
  // console.log(this);
  const output = [],
    arrLength = this.length;
  for (let i = 0; i < arrLength; ++i) {
    let result = callback(this[i], i);
    output.push(result);
  }
  return output;
};

let htmls = course.map2((course) => {
  return `<h2>${course} </h2>`;
});

console.log(htmls.join(" "));

const courses = ["js", "php"];

Array.prototype.forEach2 = function () {
  for (let index in this) {
    console.log(`index: ${index}`);
  }
};

Array.prototype.forEach3 = 1;
Array.prototype.forEach4 = 1;

courses.forEach2((course, index, array) => {
	console.log(course, index, array);
	// loop all new method create on prototype
});
