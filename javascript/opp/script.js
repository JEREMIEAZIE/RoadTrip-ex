// 'use strict';
// // // // const Person = function (firstName, birthYear) {
// // // //   this.firstName = firstName;
// // // //   this.birthYear = birthYear;
// // // // };

// // // // const jonas = new Person('Jonas', 1991);
// // // // console.log(jonas);

// // // // const matilda = new person('Matilda', 2017);
// // // // const jack = new person('Jack', 1975);
// // // // console.log(matilda, jack);
// // // // console.log(jonas instanceof Person);

// // // // Person.hey = function () {
// // // //   console.log('Het there');
// // // // };

// // // // console.log(Person.prototype);

// // // // Person.prototype.calcAge = function () {
// // // //   console.log(2037 - this.birthYear);
// // // // };

// // // // jonas.calcAge();
// // // // matilda.calcAge();

// // // // // console.log(jonas.__proto__);
// // // // // console.log(jonas.__proto__ === Person.prototype);

// // // // // console.log(Person.prototype.isPrototypeOf(jonas));
// // // // // console.log(Person.prototype.isPrototypeOf(matilda));
// // // // // console.log(Person.prototype.isPrototypeOf(Person));

// // // // // Person.prototype.species = 'Homo Sapiens';
// // // // // console.log(jonas.species, matilda.species);

// // // // // console.log(jonas.hasOwnProperty('firstName'));
// // // // // console.log(jonas.hasOwnProperty('species'));

// // // // // console.log(jonas.__proto__);
// // // // // console.log(jonas.__proto__.__proto__);
// // // // // console.log(jonas.__proto__.__proto__.__proto__);

// // // // // console.dir(Person.prototype.constructor);

// // // // // const arr = [3, 6, 4, 5, 6, 9, 3];
// // // // // console.log(arr.__proto__);
// // // // // console.log(arr.__proto__ === Array.prototype);
// // // // // console.log(arr.__proto__.__proto__);

// // // // // Array.prototype.unique = function () {
// // // // //   return [...new Set(this)];
// // // // // };
// // // // // console.log(arr.unique());

// // // // // const h1 = document.querySelector('h1');
// // // // // console.dir(x => x + 1);

// // // // // const Car = function (make, speed) {
// // // // //   this.make = make;
// // // // //   this.speed = speed;
// // // // // };
// // // // // Car.prototype.accelerate = function () {
// // // // //   this.speed += 10;
// // // // //   console.log(`${this.make} is going at ${this.speed} Km/h`);
// // // // // };

// // // // //Car.prototype.brake= function () {
// // // // //   this.speed -= 5;
// // // // //   console.log(`${this.make} is going at ${this.speed} Km/h`);
// // // // // };
// // // // // const bmw = new Car('BMW', 120);
// // // // // const mercedes = new Car('Mercedes', 95);

// // // // // bmw.accelerate();
// // // // // bmw.accelerate();
// // // // // bmw.brake();
// // // // // bmw.accelerate();

// // // // // const PersonCl = class{}

// // // // class PersonCl {
// // // //   constructor(firstName, birthYear) {
// // // //     this.firstName = fullName;
// // // //     this.birthYear = birthYear;
// // // //   }
// // // //   calcAge() {
// // // //     console.log(2037 - this.birthYear);
// // // //   }
// // // //   greet() {
// // // //     console.log(`Hey ${this.firstName}`);
// // // //   }
// // // //   get age() {
// // // //     return 2037 - this.birthYear;
// // // //   }

// // // //   set fullName(name) {
// // // //     console.log(name);
// // // //     if (name.includes(' ')) this._fullName = name;
// // // //     else alert(`${name} is not a full name!`);
// // // //   }
// // // //   get fullName() {
// // // //     return this._fullName;
// // // //   }
// // // // }
// // // // const jessica = new PersonCl('Jessica Davis,1996');
// // // // console.log(jessica);
// // // // jessica.calcAge();
// // // // console.log(jessica.age);

// // // // console.log(jessica.__proto__ === PersonCl.prototype);
// // // // // PersonCl.prototype.greet =function(){
// // // // //     console.log(`Hey ${this.firstName}`);
// // // // // }
// // // // jessica.greet();

// // // // const Walter = new PersonCl('Walter White', 1965);

// // // // // const account = {
// // // // //   owner: 'Jonas',
// // // // //   movement: [200, 530, 120, 300],

// // // // //   get latest() {
// // // // //     return this.movements.slice(-1).pop;
// // // // //   },

// // // // //   set latest(mov) {
// // // // //     this.movements.push(mov);
// // // // //   },
// // // // // };
// // // // // console.log(account.latest);
// // // // // account.latest = 50;
// // // // // console.log(account.movements);

// // // // const PersonProto = {
// // // //   calcAge() {
// // // //     console.log(2037 - this.birthYear);
// // // //   },
// // // //   init(firstName, birthYear) {
// // // //     this.firstName = firstName;
// // // //     this.birthYear = birthYear;
// // // //   },
// // // // };

// // // // const steven = Object.create(PersonProto);
// // // // console.log(steven);
// // // // steven.name = 'Steven';
// // // // steven.birthYear = 2002;
// // // // steven.calcAge();

// // // // console.log(steven.__proto__);

// // // // const sarah = Object.create(PersonProto);
// // // // sarah.init('Sarah', 1979);
// // // // sarah.calcAge();

// // // // class CarCl {
// // // //   constructor(make, speed) {
// // // //     this.make = make;
// // // //     this.speed = speed;
// // // //   }
// // // //   accelerate() {
// // // //     this.speed += 10;
// // // //     console.log(`${this.make} is going at ${this.speed} Km/h`);
// // // //   }

// // // //   brake() {
// // // //     this.speed -= 5;
// // // //     console.log(`${this.make} is going at ${this.speed} Km/h`);
// // // //   }

// // // //   get speedUS() {
// // // //     return this.speed / 1.6;
// // // //   }
// // // // }
// // // // const ford = new CarCl('Ford', 120);
// // // // console.log(ford.speedUS);
// // // // ford.accelerate();
// // // // ford.accelerate();
// // // // ford.brake();
// // // // ford.speedUS = 50;
// // // // console.log(ford);
// // // const Person = function (firstName, birthYear) {
// // //   this.firstName = firstName;
// // //   this.birthYear = birthYear;
// // // };
// // // Person.prototype.calcAge = function () {
// // //   console.log(2037 - this.birthYear);
// // // };
// // // const Student = function (firstName, birthYear, course) {
// // //   Person.call(this, firstName, birthYear);
// // //   this.course = course;
// // // };
// // // Student.prototype = Object.create(Person.prototype);

// // // Student.prototype.introduce = function () {
// // //   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// // // };

// // // const mike = new Student('Mike', 2020, 'Computer Science');
// // // mike.introduce();
// // // mike.calcAge();

// // // console.log(mike.__proto__);
// // // console.log(mike.__proto__.__proto__);

// // // console.log(mike instanceof Student);
// // // console.log(mike instanceof Person);
// // // console.log(mike instanceof Object);

// // // Student.prototype.constructor = Student;
// // // console.dir(Student.prototype.constructor);

// // // const Car = function (make, speed) {
// // //   this.make = make;
// // //   this.speed = speed;
// // // };
// // // Car.prototype.accelerate = function () {
// // //   this.speed += 10;
// // //   console.log(`${this.make} is going at ${this.speed} Km/h`);
// // // };

// // // Car.prototype.brake = function () {
// // //   this.speed -= 5;
// // //   console.log(`${this.make} is going at ${this.speed} Km/h`);
// // // };

// // // const EV = function (make, speed, charge) {
// // //   Car.call(this, make, speed);
// // //   this.charge = charge;
// // // };
// // // EV.prototype = Object.create(Car.prototype);

// // // EV.prototype.chargeBattery = function (chargeTo) {
// // //   this.charge = chargeTo;
// // // };

// // // EV.prototype.accelerate = function () {
// // //   this.speed += 20;
// // //   this.charge--;
// // //   console.log(
// // //     `${this.make} is going at ${this.speed} Km/h , with charge ${this.charge}`
// // //   );
// // // };

// // // const tesla = new EV('Tesla', 120, 23);
// // // tesla.chargeBattery(90);
// // // console.log(tesla);
// // // tesla.brake();
// // // tesla.accelerate();

// // // class PersonCl {
// // //   constructor(firstName, birthYear) {
// // //     this.firstName = fullName;
// // //     this.birthYear = birthYear;
// // //   }
// // //   calcAge() {
// // //     console.log(2037 - this.birthYear);
// // //   }
// // //   greet() {
// // //     console.log(`Hey ${this.firstName}`);
// // //   }
// // //   get age() {
// // //     return 2037 - this.birthYear;
// // //   }

// // //   set fullName(name) {
// // //     console.log(name);
// // //     if (name.includes(' ')) this._fullName = name;
// // //     else alert(`${name} is not a full name!`);
// // //   }
// // //   get fullName() {
// // //     return this._fullName;
// // //   }

// // //   static hey() {
// // //     console.log('Hey there');
// // //   }
// // // }
// // // class StudentCl extends PersonCl {
// // //   constructor(fullName, birthYear, course) {
// // //     super(fullName, birthYear);
// // //     this.course = course;
// // //   }

// // //   introduce() {
// // //     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// // //   }

// // //   calcAge() {
// // //     console.log(
// // //       `I'm ${2037 - this.birthYear} year old, but i feel more like ${
// // //         2037 - this.birthYear
// // //       }`
// // //     );
// // //   }
// // // }
// // // const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// // // martha.introduce();
// // // martha.calcAge();

// // const PersonProto = {
// //   calcAge() {
// //     console.log(2037 - this.birthYear);
// //   },
// //   init(firstName, birthYear) {
// //     this.firstName = fullName;
// //     this.birthYear = birthYear;
// //   },
// // };

// // const steven = Object.create(PersonProto);
// // const StudentProto = Object.create(StudentProto);

// // StudentProto.init = function (firstName, birthYear, course) {
// //   PersonProto.init.call(this.firstName, birthYear);
// //   this.course = course;
// // };

// // StudentProto.introduce = function () {
// //   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// // };

// // const jay = Object.create(StudentProto);
// // jay.init('Jay', 2010, 'Computer Science');
// // jay.introduce();
// // jay.calcAge();

// class Account {
//   locale = navigator.language;
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account,${owner}`);
//   }

//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//   withdrawal(val) {
//     this.deposit(-val);
//     return this;
//   }
//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       return this;
//     }
//   }

//   static helper() {
//     console.log('Helper');
//   }

//   #approveLoan(val) {
//     return true;
//   }
// }
// const acc1 = new Account('Jonas', 'EUR', 1111);
// // acc1._movements.push(250);
// // acc1._movements.push(-140);
// acc1.deposit(250);
// acc1.Withdraw(-140);
// acc1.approveLoan(1000);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements());

// console.log(acc1);
// Account.helper(
//   acc1.deposit(300).deposit(500).withdrawal(35).requestLoan(25000).withdrawal
// )(4000);
// console.log(acc1.getMovements());

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//     return this;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// class EVCl extends CarCl {
//   #charge;

//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }

//   chargeBattery(chargeTo) {
//     this.#charge = chargeTo;
//     return this;
//   }

//   accelerate() {
//     this.speed += 20;
//     this.#charge--;
//     console.log(
//       `${this.make} is going at ${this.speed} km/h, with a charge of ${
//         this.#charge
//       }`
//     );
//     return this;
//   }
// }

// const rivian = new EVCl('Rivian', 120, 23);
// console.log(rivian);
// // console.log(rivian.#charge);
// rivian
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .brake()
//   .chargeBattery(50)
//   .accelerate();

// console.log(rivian.speedUS);
