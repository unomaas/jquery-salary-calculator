$(document).ready(function() {
  console.log('jQuery Works');
  console.log('Js Works');

  //#region ⬇ Employee object data below:
  const jenB = {firstName: "Jen", lastName: "Barber", id: 4521, title: "Team Lead", annualSalary: 80000};
  const mauriceM = {firstName: "Maurice", lastName: "Moss", id: 8724, title: "Support Team", annualSalary: 58000};
  const royS = {firstName: "Roy", lastName: "Smith", id: 9623, title: "Quality Assurance", annualSalary: 48000};
  const ryanM = {firstName: "Ryan", lastName: "Maas", id: 0001, title: "CEO", annualSalary: 90000};
  const hannahE = {firstName: "Hannah", lastName: "Engelhart", id: 0002, title: "Controller", annualSalary: 85000};


  const employeesArray = [jenB, mauriceM, royS, ryanM, hannahE];

});

// Base Mode: 
// - Step #1.) The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.
// - Step #2.) A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields.
// - Step #3.) Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.
// - Step #4.) Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.
// Stretch Mode: 
// - Stretch #1.) Add styling or extra functionality that fits with the theme of this assignment.
// - STretch #2.) Once the employee is deleted, update the total spend on salaries account for this employee's removal. This will require that the logic knows which element was removed. You will need to use `.text()` as a getter or look into jQuery's `.data()` function. This is tricky! 