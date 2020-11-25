/**
 *  User 1
 */
const user1 = {
  name: "Phil",
  score: 4,
  increment: function () {
    user1.score++;
  },
};
user1.increment();
console.log(user1);

/**
 *  User 2
 */
const user2 = {};
user2.name = "Julia";
user2.score = 5;
user2.increment = function () {
  user2.score++;
};
user2.increment();
console.log(user2);

/**
 *  User 3
 */
const user3 = Object.create(null); // Adds an empty object attached to this object we created.  Labeled null for now, but we will rename later
user3.name = "Eva";
user3.score = 9;
user3.increment = function () {
  user3.score++;
};
user3.increment();
console.log(user3);
