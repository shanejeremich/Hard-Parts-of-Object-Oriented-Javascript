class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  sayName() {
    console.log(`I'm ${this.name}`);
  }
  increment() {
    this.score++;
  }
}

const user1 = new UserCreator("Shane", 23);
const user2 = new UserCreator("Rachel", 13);
console.log(user1);
console.log(user2);
user1.sayName();
user2.sayName();

class PaidUserCreator extends UserCreator {
  constructor(paidName, paidScore, accountBalance) {
    super(paidName, paidScore);
    this.accountBalance = accountBalance;
  }
  increaseBalance() {
    this.accountBalance++;
  }
}

const paidUser1 = new PaidUserCreator("Alicia", 8, 25);
paidUser1.increaseBalance();
paidUser1.sayName();
console.log(paidUser1);
