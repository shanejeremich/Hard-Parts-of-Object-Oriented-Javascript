function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function () {
  this.score++;
};
UserCreator.prototype.login = function () {
  console.log("Login");
};

const user1 = new UserCreator("Eva", 9);
user1.increment();
console.log(user1);

const obj = {
  num: 3
};

console.log(obj.num);
console.log(obj.hasOwnProperty("num"));
console.log(Object.prototype);
console.log(Function.prototype.__proto__);
console.log(Object.getPrototypeOf.toString);
