// const myModule = require("./module");
const {func, obj} = require("./module.cjs");

console.log(func());

console.log(obj.user+" "+ obj.age);
