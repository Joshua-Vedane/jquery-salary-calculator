// console.log('JS');

//array to hold input field info
let employees = [];
// store the result of calculateTotalMonthly here for DOM rendering. 
let annualTotalCost = 0;
let monthlyCost = 0;

$(document).ready(handleReady);

function handleReady() {
    // console.log('JQ');
    renderToDom();

    //click listeners
    $('#addEmployee').on('click', handleAddEmployeeClick);
    $('#employeeListOut').on('click', '.delete', handleDeleteEmployeeClick);
}

//renderToDom
function renderToDom() {
    //no duplicate employees
    $('#employeeListOut').empty();
    //input field rendering
    for (let employee of employees) {
        //create the employee table row
        let employeeSalaryNum = Number(employee.annualSalary);
        let employeeSalaryOut = employeeSalaryNum.toLocaleString();
        let employeeRow = $(`<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td>$${employeeSalaryOut}</td>
        <td><button class = "btn btn-dark delete">Delete</button></td>
        </tr>`);

        //append employee info to the DOM
        $('#employeeListOut').append(employeeRow);
        // console.log('inRenderToDom');

        //calculate monthlyCost
        monthlyCost = annualTotalCost / 12;
        //check if over budget
        checkOverBudget(monthlyCost);
        //format monthlyCost for output.
        let roundMonthlyCost = Math.round(monthlyCost);
        let monthlyCostOut = roundMonthlyCost.toLocaleString();
        // console.log(`this should be monthly cost: `, monthlyCostOut);
        //render Monthly Cost to DOM
        $('.totalOut').text(monthlyCostOut);
    }
}

//check if over budget
function checkOverBudget(monthlyCost) {
    if (monthlyCost >= 20000) {
        $('.totalOut').addClass('over-budget');
    }
}


//Submit button handler
function handleAddEmployeeClick() {
    // console.log('button click');
    let newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        id: $('#idIn').val(),
        title: $('#titleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    };
    //store the annual salary of each employee in variable for use in calculating total monthly cost later. 
    annualTotalCost += Number(newEmployee.annualSalary);
    // console.log(`testing:`, parseInt(annualTotalCost));

    //make sure we get the right stuff
    // console.log(newEmployee);
    //newEmployee now in employees array. 
    employees.push(newEmployee);
    //make sure it pushed newEmployee to array
    // console.log(employees);

    //call renderToDom. When we click on submit, it will push a new object into employees array. We then want it to show up the DOM.
    renderToDom();

    //we also want to clear the input fields. Let's make a new function that does that and it will be called here. 
    clearFields();
}

function handleDeleteEmployeeClick() {
    console.log('delete works!');
    $(this).parent().parent().remove();
}

function clearFields() {
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');
}