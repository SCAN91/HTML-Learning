const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      //... More employee records can be added here
    ];
     // Function to display all employees
     function displayEmployees(){
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: - ${employee.department} - $${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = totalEmployees;
  }
function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
    }
    function displayHREmployees() {
     const hrEmployees = employees.filter(employee => employee.department === 'HR');
      const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
      document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}
function displayITEmployees() {
     const itEmployees = employees.filter(employee => employee.department === 'IT');
      const itEmployeesDisplay = itEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: - ${employee.department} - $${employee.salary}</p>`).join('');
      document.getElementById('employeesDetails').innerHTML = itEmployeesDisplay;
}
function displayFinanceEmployees() {
     const financeEmployees = employees.filter(employee => employee.department === 'Finance');
      const financeEmployeesDisplay = financeEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
      document.getElementById('employeesDetails').innerHTML = financeEmployeesDisplay;
}
function findEmployeeById(employeeId) {
    var foundEmployee = prompt("Input the ID of the employee you wish to find") === employeeId;
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
     }
 }
 function addEmployee(){
    var nemployeeid = prompt ("Please enter the id of the new employee");
    var nemployeename = prompt ("Please enter the Name of the new employee");
    var nemployeeage = prompt ("Please enter the age of the new employee");
    var nemployeedep = prompt ("Please enter the department of the new employee");
    var nemployee$ = prompt ("Please enter the salary of the new employee");
    var newemployee = {id: nemployeeid, name: nemployeename, age: nemployeeage, department: nemployeedep, salary: nemployee$};
    employees.push(newemployee);
    }