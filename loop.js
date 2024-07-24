for (let i = 0; i < 5; i++) {
  console.log("hello world");
}
sum = 0;
for (let i = 0; i < 5; i++) {
  sum += i;
}
console.log(sum);

// for-of loop
let str = "hello world";
for (let i of str) {
  console.log(i);
}

// for-in loop
let student = {
  //object
  name: "achyut",
  age: 20,
  cgpa: 9,
};
for (let key in student) {
  console.log("key=", key, "value", student[key]);
}
