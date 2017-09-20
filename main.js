var employees = [];

function employeeRecords (name, jobTitle, salary, status) {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = status;
}

employeeRecords.prototype.printEmployeeForm = function () {
  console.log("Name: " + this.name + ", Job: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status )
};

var myEmployee = new employeeRecords ("Phat", "IT", "100k", "Full Time");
employees.push(myEmployee);
myEmployee.printEmployeeForm();

var myEmployee = new employeeRecords ("Nam", "Sale Manager", "66k", "Full Time");
employees.push(myEmployee);
myEmployee.printEmployeeForm();

var myEmployee = new employeeRecords ("Minh", "Video Gamer", "500k", "Full Time");
employees.push(myEmployee);
myEmployee.printEmployeeForm();

var myEmployee = new employeeRecords ("Dendi", "Soccer", "1bilions", "Full Time");
employees.push(myEmployee);
myEmployee.printEmployeeForm();


employees[1].status = "Contracted"

console.log(employees);
