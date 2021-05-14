$(document).ready(function() {
  console.log('jQuery Works');
  console.log('Js Works');

  //#region ⬇ Employee data below: ... oops, this actually isn't even required.  Guess it's good practice. 
  const jenB = {firstName: "Jen", lastName: "Barber", id: 4521, title: "Team Lead", annualSalary: 80000};
  const mauriceM = {firstName: "Maurice", lastName: "Moss", id: 8724, title: "Support Team", annualSalary: 58000};
  const royS = {firstName: "Roy", lastName: "Smith", id: 9623, title: "Quality Assurance", annualSalary: 48000};
  const ryanM = {firstName: "Ryan", lastName: "Maas", id: 0001, title: "CEO", annualSalary: 90000};
  const hannahE = {firstName: "Hannah", lastName: "Engelhart", id: 0002, title: "Controller", annualSalary: 85000};
  const employeesArray = [jenB, mauriceM, royS, ryanM, hannahE];
  //#endregion ⬆ Employee data above. 

  //#region ⬇ Setting default monthly costs: 
  let monthlyCosts = 0;
  let totalSalary = 0;
  //#endregion ⬆ Default monthly costs above. 

  //#region ⬇ Submit button actions below:
  $('#submitButton').on('click', clickedSubmit)
  function clickedSubmit() {
    console.log('Test: In clickedSubmit.'); 

    // ⬇ Declaring variables stored with input values: 
    let firstNameInput = $('#firstNameInput').val();
    let lastNameInput = $('#lastNameInput').val();
    let idInput = $('#idInput').val();
    let titleInput = $('#titleInput').val();
    let salaryInput = $('#salaryInput').val();

    // ⬇ Putting those input variables on the DOM:
    $('#tableBody').append(`
      <tr>
        <td>${firstNameInput}</td>
        <td>${lastNameInput}</td>
        <td>${idInput}</td>
        <td>${titleInput}</td>
        <td class="salaryCell">${salaryInput}</td>
        <td class="deleteCell"><button class="deleteEmployeeButton">Delete</button></td>
      </tr>
    `); // End tableBody.append. 

    // ⬇ Emptying out the input fields after click.  
    $('input').val('');

    // ⬇ Updating costs after click. 
    totalSalary += Number(salaryInput); 
    monthlyCosts = totalSalary / 12;
    $('#monthlyOutput').text(monthlyCosts);
    console.log('Test: Total Salary is currently: ', totalSalary);
    console.log('Test: Monthly Costs is currently: ', monthlyCosts);

    // ⬇ If monthlyCosts are over budget, add red background. 
    if (monthlyCosts > 20000) {
      $('#totalMonthlyCost').addClass('overBudget');
    } // End if over budget. 

  } // End clickedSubmit function. 
  //#endregion ⬆ Submit button actions above. 

  //#region ⬇ Delete button actions below:
  $('#tableBody').on('click', '.deleteEmployeeButton', clickedDelete);
  function clickedDelete() {
    console.log('Test: In clickedDelete.'); 
    $(this).parent().parent().remove(); // Syntax: Button.Cell.Row.Remove.
    // ⬇ This is where the Stretch goal code would go, I think. 

  } // End clickedDelete function. 
  //#endregion ⬆ Delete button actions above. 



});

// My To Do:
//    Figure out how to convert the Monthly Cost output to dollar amounts with commas.
//    Figure out the Stretch #2 Goal. 
//    Divide annual salary by 12 and use that for the monthly costs.  

// Base Mode: 
  // - Step #1.) The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_. (DONE)
  // - Step #2.) A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. (DONE)
  // - Step #3.) Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost. (DONE)
  // - Step #4.) Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total. (DONE)
// Stretch Mode: 
  // - Stretch #1.) Add styling or extra functionality that fits with the theme of this assignment.
  // - STretch #2.) Once the employee is deleted, update the total spend on salaries account for this employee's removal. This will require that the logic knows which element was removed. You will need to use `.text()` as a getter or look into jQuery's `.data()` function. This is tricky! 
