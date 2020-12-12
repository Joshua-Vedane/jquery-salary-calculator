console.log('JS');

//array to hold input field info
let employees = [];
// store the result of calculateTotalMonthly here for DOM rendering. 
let monthlyCost = 0;
let annualTotalCost = 0;

$(document).ready(handleReady);


//submitbuttonOnClick function will take the values of the input fields and push them into the global empty array. It will also call the renderToDom function to get those values displayed. Also, let's clear the input fields after submission so we can keep rolling. 

//create an renderToDom function that is called in handleReady AND also on submit button click. This way it will update on page load and also every time button clicked. First, clear out that empty array, NO DUPLICATES TODAY! Second, we want to loop over the employees array. For each object in the array create a variable to hold the info. We want to create a new table row with each key:value pair taking up a single <td>. Then simply append that variable to the tbody "employeeListOut". maybe call calculateTotalMonthly at the end of this? we'll see. 

//calculateTotalMonthly function is where the real work is. We need to loop through all of the values of the employee array and grab each annual salary. For each salary, we need to divide it by 12 (months) and either round that number to the nearest cent or something similar. Then, we need to knock that number into a variable that will then be rendered to the DOM. don't forget, annualSalary is a string that needs to get converted to a number!!!!!!

function handleReady() {
    console.log('JQ');
    renderToDom();

    //click listeners
    $('#addEmployee').on('click', handleAddEmployeeClick);
}

//renderToDom
function renderToDom() {
    //no duplicate employees
    $('#employeeListOut').empty();
    //input field rendering
    for (let employee of employees) {
        //create the employee table row
        let employeeRow = $(`<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td>${employee.annualSalary}</td>
        </tr>`);

        //append employee info to the DOM
        $('#employeeListOut').append(employeeRow);
        console.log('inRenderToDom');

        //render the total monthly salary of all employees. 
        //call calculateTotalMonthly. It will grab from the array. We'll get into the current for of loop to do this. 

        // let monthlyCostOut = calculateTotalMonthly(employee);
        // $('.totalOut').text(monthlyCostOut);

        //try this once more. 
        let monthlyCostOut = annualTotalCost/12;
        console.log(`this should be monthly cost: ` ,monthlyCostOut);
        $('.totalOut').text(monthlyCostOut)
        
    }
}
//calculate total monthly salary. given the employee from for..of loop in renderToDom. will return monthlyCost variable. 

//because we're grabbing from the array, it's doubling up. gonna try doing this by addition assignment of global variable annualTotalCost
// function calculateTotalMonthly (employee) {
//     let monthlyEmployeeSalary = Number(annualTotalCost) / 12;
//     return monthlyCost += parseInt(monthlyEmployeeSalary);
    
    

// }



//Submit button handler
function handleAddEmployeeClick(){
    console.log('button click');
    let newEmployee = {
        firstName : $('#firstNameIn').val(),
        lastName : $('#lastNameIn').val(),
        id : $('#idIn').val(),
        title : $('#titleIn').val(),
        annualSalary : $('#annualSalaryIn').val()
    };
    //store the annual salary of each employee in variable for use in calculating total monthly cost later. 
    annualTotalCost += Number(newEmployee.annualSalary);
    console.log(`testing:` , parseInt(annualTotalCost));

    //make sure we get the right stuff
    console.log(newEmployee);
    //newEmployee now in employees array. 
    employees.push(newEmployee);
    //make sure it pushed newEmployee to array
    console.log(employees);

    //call renderToDom. When we click on submit, it will push a new object into employees array. We then want it to show up the DOM. see zhu-bootstrap for that. 
    renderToDom();

    //we also want to clear the input fields. Let's make a new function that does that and it will be called here. 
    clearFields();
}

function clearFields(){
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');
}