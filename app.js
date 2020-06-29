// animal protoype
// object prototype

// Person constructor

function Person(firstName, lastName, grossSalary, taxRate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grossSalary = grossSalary;
  this.taxRate = taxRate;
  // this.calculateSalary = function () {
  //   this.tax = (this.taxRate / 100) * this.grossSalary;
  //   this.netSalary = this.grossSalary - this.tax;
  //   return this.netSalary;
  // };
}

// Calculate salary
Person.prototype.calculateSalary = function () {
  this.tax = (this.taxRate / 100) * this.grossSalary;
  this.netSalary = this.grossSalary - this.tax;
  return this.netSalary;
};

// Get full name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Gets Married

Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

const mina = new Person("Mina", " Doe", 2000, 2);
const gina = new Person("Gina", "Johnson", 3500, 3);

// console.log(mina);
// console.log(mina.calculateSalary());
// console.log(gina);
// console.log(gina.calculateSalary());

// console.log(mina.getFullName());
// console.log(gina.getFullName());
// console.log(mina);

console.log("Gina's name before getting married: " + gina.getFullName());

gina.getsMarried("Robinson");

console.log("Gina's name after getting married: " + gina.getFullName());
