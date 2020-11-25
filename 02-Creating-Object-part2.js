function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
}

const user1 = userCreator("Phil", 4);
const user2 = userCreator("Julia", 5);
console.log(user1);
console.log(user2);

/**
 * Solution 2
 */

function userCreator2(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("You're Logged In");
  },
};
console.log("userFunctionStore", userFunctionStore);

const player1 = userCreator("Shane", 4);
const player2 = userCreator("Rachel", 5);
player1.increment();
player2.increment();
console.log(player1);
console.log(player2);
console.log("\n");
