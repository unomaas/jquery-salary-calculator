$(document).ready(function() {
  console.log('jQuery Works');
  console.log('Js Works');


});

// Base Mode: 
// - Step #1.) The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.
// - Step #2.) A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields.
// - Step #3.) Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.
// - Step #4.) Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.
// Stretch Mode: 
// - Stretch #1.) Add styling or extra functionality that fits with the theme of this assignment.
// - STretch #2.) Once the employee is deleted, update the total spend on salaries account for this employee's removal. This will require that the logic knows which element was removed. You will need to use `.text()` as a getter or look into jQuery's `.data()` function. This is tricky! 