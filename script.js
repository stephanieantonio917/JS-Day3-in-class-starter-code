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

// Create an Employee instance
const Employee1 = new Employee("Stephanie", "Antonio", "stephanieantonio@utexas.edu", "07/14/03", "0");
console.log(Employee1);
console.log(Employee1.getEmployee());


//const Employee1 = new Employee("Stephanie", "Antonio", "stephanieantonio@utexas.edu", "07/14/03", "0")
//console.log(Employee1)



//define class, insatntiate class, console log 

// 1. Create a new Employee class with a constructor for Employee giving them a firstname, lastname, email, and birthdate
// 2. Instantiate (i.e. create a new instance) of an Employee with your info and save it to a const with your first name
// 3. After step 2, console log your const and then try to console.log parts of the object
// 4. Then create a const array that creates many "new Employee" objects and says to an and says to an array.  Console this object as a whole and parts of it

const newEmployees = [
  {firstName:"Bevo", lastName: " the Longhorn", email:"longhornmail.com", date: "02/06/25", salary: "89000"},
]



// 5. Add methods to your class to "getEmployees" which just returns all the fields in the object.
console.log(newEmployees[0])




//    Also add methods to addEmployee (this will be static) and a method to editEmployee
//    Test your methods using JS

Employee.addEmployee("Alice", "Brown", "alice@example.com", "03/03/93", "75000");
Employee.addEmployee("Bob", "Smith", "bob@example.com", "05/10/90", "80000");

console.log(Employee.getEmployees());





// 6. Try to get instances of your class object to display in the table.  You can set the innerhtml of the
//    of the table to be empty and then replace it with the looped-through values of your object




//Try to output 3 instances of your class object into the table

//document.addEventListener("DOMContentLoaded", function () {
  // Select the table body properly
 // const tableBody = document.querySelector("#employeeTable tbody");

 // if (!tableBody) {
  //    console.error("Table body not found!");
    //  return; // Stop execution if the table doesn't exist
  //}

  // Example employee array (Ensure employees exist before running the loop)
 


  // Check if tableBody exists
 // Select the table body properly
const tableBody = document.getElementById("tableBody");

// Check if tableBody exists
if (!tableBody) {
    console.error("Error: Table body element not found!");
} else {
    // Clear existing rows in the table
    tableBody.innerHTML = "";

    // Fetch employees from the Employee class
    const employees = Employee.getEmployees();

    // Ensure employees array exists
    if (!Array.isArray(employees) || employees.length === 0) {
        console.warn("No employees to display.");
    } else {
        // Populate the table
        employees.forEach(employee => {
            // Fetch employee details
            const details = employee.getEmployee(); // Correct method call
            
            console.log(details); // Debugging: Check if data is correct

            // Create a new row
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${details.firstName}</td>
                <td>${details.lastName}</td>
                <td>${details.email}</td>
                <td>${details.birthdate}</td>
            `;

            // Append the row to the table
            tableBody.appendChild(row);
        });
    }
}




///challenges

//callbacks
function sendInvoice(clientName, callback) {
  console.log(`Generating invoice for ${clientName}...`);
  setTimeout(() => {
    callback(`Invoice sent to ${clientName}`);
  }, 1500);
}

// Example Usage
sendInvoice("ABC Corp", (confirmation) => {
  console.log(confirmation);
});

//promises

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


verifyPayment(3000)
  .then(console.log)
  .catch(console.error);

verifyPayment(6000)
  .then(console.log)
  .catch(console.error);


  //asynch await
  async function processRefund(requestId) {
    try {
      console.log(`Processing refund request #${requestId}...`);
  
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(`Refund verification complete for request #${requestId}`);
  
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log(`Payment reversal completed for request #${requestId}`);
  
      return `Refund complete for request #${requestId}`;
    } catch (error) {
      console.error(`Error processing refund #${requestId}:`, error);
    }
  }

  processRefund(789).then(console.log);
  