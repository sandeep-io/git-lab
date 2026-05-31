const employees = [
    { id: 1, name: "John", department: "HR", salary: 50000 },
    { id: 2, name: "Alice", department: "IT", salary: 60000 },
    { id: 3, name: "Bob", department: "HR", salary: 55000 },
    { id: 4, name: "David", department: "Finance", salary: 65000 }
];

// Display all employees using forEach()
function displayEmployees() {
    let output = "<h3>All Employees</h3><ul>";

    employees.forEach(emp => {
        output += `<li>${emp.id} - ${emp.name} - ${emp.department} - ₹${emp.salary}</li>`;
    });

    output += "</ul>";
    document.getElementById("output").innerHTML = output;
}

// Calculate total salary using reduce()
function calculateTotalSalary() {
    const totalSalary = employees.reduce(
        (total, emp) => total + emp.salary,
        0
    );

    document.getElementById("output").innerHTML =
        `<h3>Total Salary: ₹${totalSalary}</h3>`;
}

// Display HR employees using filter()
function displayHREmployees() {
    const hrEmployees = employees.filter(
        emp => emp.department === "HR"
    );

    let output = "<h3>HR Employees</h3><ul>";

    hrEmployees.forEach(emp => {
        output += `<li>${emp.name}</li>`;
    });

    output += "</ul>";

    document.getElementById("output").innerHTML = output;
}

// Find employee using find()
function findEmployeeById(id) {
    const employee = employees.find(
        emp => emp.id === id
    );

    if (employee) {
        document.getElementById("output").innerHTML =
            `<h3>Employee Found</h3>
             <p>ID: ${employee.id}</p>
             <p>Name: ${employee.name}</p>
             <p>Department: ${employee.department}</p>
             <p>Salary: ₹${employee.salary}</p>`;
    } else {
        document.getElementById("output").innerHTML =
            "<p>Employee not found.</p>";
    }
}