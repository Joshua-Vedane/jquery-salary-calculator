# Project Name

Monthly Salary Calculator

## Description

Your project description goes here. What problem did you solve? How did you solve it?

This is a monthly salary application that keeps track of the monthly salaries of employees. The user adds an employee's information into the text fields and clicks the submit button. This displays the information in the table below. The annual salaries of all the employees added are calculated and converted to a total monthly cost which is displayed under the table. 

Once the monthly total cost for all employees added hits a certain number, in this case, $20,000, the total monthly cost will turn red. This shows that the payroll is over budget. 

If an employee was added by mistake or there was a typing error on input, there is a delete button that will remove that employee from the table. (This does not change the monthly cost displayed). 

## In Depth Explanation 

This project is a simple webpage that runs all of the calculations in javascript. To recreate this project, follow these steps
1. Create HTML, CSS, JS files and bring BOOTSTRAP and JQUERY files into the directory. Link/source all files. 
2. In HTML, create: 
    a. Header
    b. Input field
    c. 'Submit' button 
    d. table with table head
    e. Section for displaying monthly costs.
3. Style to suit. This project combined BOOTSTRAP with some customized styling in CSS file.
4.  In JS : 
    a. create three global variables to hold 1(empty array) 2(total employee annual salaries) 3(total monthly cost)
    b. call a JQ function to handle document ready
    c. create document ready function that: 
        i. calls a function that will render to the DOM the information added to input fields. 
        ii. add two click listeners that listen for the submit button click and the delete button click(explained below).
    d. create the submit button handler. This will create a new object for all the information added to the input fields upon click. Take the annual salary of each employee and add it the total annual cost global variable. Next, push this newly created object to the empty employees array. Call a function that will handle rendering this information to the DOM. Also, call a function that resets the input fields to empty after button click. 
    e. create a function that handles rendering information to the DOM. This will: 
        i. clear out the tbody so no duplications will be rendered. 
        ii. loop through the employees array and append all information to the table body in their respective table columns. 
        iii. calculate the monthlyCost by dividing the total annual cost by 12. 
        iv. call a budget checker function. 
            a. This function will check if the monthly cost is greater than a set amount. If it is, add a class to the monthly cost display element which changes the background color of that element. 
        v. render the monthly cost to the DOM. 
        vi. create the delete button handler 
            i. this button will delete the current table row


## Usage 
1. open the html file in browser
2. input employee information into their respective input fields
3. click the submit button 
4. repeat steps 2&3 for all employees
5. check the total monthly cost at the bottom of the page if under/over budget