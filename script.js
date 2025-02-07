//const members = [
   // {first_name:"John", last_name: "Doe", email:"johndoe@example.com", birthdate:"1999-12-31", salary:80000},
   // {first_name:"Jane", last_name: "Smith", email:"janesmith@example.com", birthdate:"2015-09-01", salary:75000}
//];



//OLD WAY DEMO - CONSTRUCTOR FUNCTION
//function Employee(firstName, lastName, email, birthdate, salary) {
  //  this.firstName = firstName;
    //this.lastName = lastName;
    //this.email = email;
    //this.birthdate = birthdate;
    //this.salary = salary;
  //}

  //Employee.addEmployee = function(firstName, lastName, email, birthdate, salary) {
   // return new Employee(firstName, lastName, email, birthdate, salary);
  //};

  //Employee.prototype.editEmployee = function(updates) {
    //Object.assign(this, updates);
  //};

  // Usage example:
  //const bill = Employee.addEmployee("Bill", "Doe", "bill@example.com", "1990-01-01", 50000);
  //console.log(bill);

  //bill.editEmployee({ salary: 7777777, email: "xxxxxxx@example.com" });
  //console.log(bill);



//ES6 way - CLASSES - Create a new Employee class that adds a new employee and console logs them
// Goals:
// ES6 way - CLASSES - Create a new Employee class that adds a new employee and console logs them

// 1. Create a new Employee class with a constructor for Employee giving them a firstname, lastname, email, and birthdate
class Employee {
  static employees = []; // Define employees array

  constructor(firstName, lastName, email, birthdate, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthdate = birthdate;
    this.salary = salary;
  }

  getEmployee() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      birthdate: this.birthdate,
      salary: this.salary,
    };
  }

  static getEmployees() {
    return Employee.employees;
  }

  static addEmployee(firstName, lastName, email, birthdate, salary) {
    const newEmployee = new Employee(firstName, lastName, email, birthdate, salary);
    Employee.employees.push(newEmployee);
    return newEmployee;
  }

  static editEmployee(email, updatedDetails) {
    const employee = Employee.employees.find(emp => emp.email === email);
    if (employee) {
      Object.assign(employee, updatedDetails);
      return employee;
    } else {
      return `Employee with email ${email} not found.`;
    }
  }
}

// 2. Instantiate (i.e. create a new instance) of an Employee with your info and save it to a const with your first name
const Employee1 = new Employee("Stephanie", "Antonio", "stephanieantonio@utexas.edu", "07/14/03", "0");

// 3. Console log your const and then try to console.log parts of the object
console.log(Employee1);
console.log(Employee1.getEmployee());

// 4. Create a const array that creates many "new Employee" objects and saves them to an array. Console this object as a whole and parts of it
const newEmployees = [
  { firstName: "Bevo", lastName: "the Longhorn", email: "longhornmail.com", date: "02/06/25", salary: "89000" },
];
console.log(newEmployees[0]);

// 5. Add methods to your class to "getEmployees" which returns all the fields in the object.
// Also, add methods to addEmployee (static) and editEmployee. Test your methods using JS
Employee.addEmployee("Bevo", "Burnt Orange", "bevo@example.com", "02/06/25", "75000");
Employee.addEmployee("Bob", "Smith", "bob@example.com", "05/10/25", "80000");
Employee.addEmployee("Jane", "Doe", "jane@example.com", "03/03/25", "75000");
console.log(Employee.getEmployees());

// 6. Get instances of your class object to display in the table.
const tableBody = document.getElementById("tableBody");

if (!tableBody) {
    console.error("Error: Table body element not found!");
} else {
    tableBody.innerHTML = "";
    const employees = Employee.getEmployees();
    if (!Array.isArray(employees) || employees.length === 0) {
        console.warn("No employees to display.");
    } else {
        employees.forEach(employee => {
            const details = employee.getEmployee();
            console.log(details);
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${details.firstName}</td>
                <td>${details.lastName}</td>
                <td>${details.email}</td>
                <td>${details.birthdate}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}

// Callbacks - Send Invoice
function sendInvoice(clientName, callback) {
  console.log(`Generating invoice for ${clientName}...`);
  setTimeout(() => {
    callback(`Invoice sent to ${clientName}`);
  }, 1500);
}
sendInvoice("ABC Corp", (confirmation) => {
  console.log(confirmation);
});

// Promises - Verify Payment
function verifyPayment(orderTotal) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderTotal < 5000) {
        resolve(`Payment of $${orderTotal} approved`);
      } else {
        reject(`Payment of $${orderTotal} requires manager approval`);
      }
    }, 1000);
  });
}
verifyPayment(3000).then(console.log).catch(console.error);
verifyPayment(6000).then(console.log).catch(console.error);

// Async/Await - Process Refund
async function verifyRefund(requestId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Refund request #${requestId} verified`);
    }, 1000);
  });
}
async function reversePayment(requestId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Payment reversal for request #${requestId} completed`);
    }, 2000);
  });
}
async function processRefund(requestId) {
  try {
    const verification = await verifyRefund(requestId);
    console.log(verification);
    const reversal = await reversePayment(requestId);
    console.log(reversal);
    return `Refund complete for request #${requestId}`;
  } catch (error) {
    console.error("Refund process failed:", error);
    return `Refund failed for request #${requestId}`;
  }
}
processRefund(12345).then(console.log);


