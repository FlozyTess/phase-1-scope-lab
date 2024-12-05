// Declare a variable in global scope using var
var customerName = 'bob';

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
// Function to declare a variable in global scope and assign a value
function setBestCustomer() {
    bestCustomer = 'not bob'; }
// Function to overwrite the value of the global bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'john';

// Function to try changing the constant value
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'peter'; 
}