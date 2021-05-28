// Input Elements
var idIn = document.getElementById("id");
var nameIn = document.getElementById("name");
var emailIn = document.getElementById("email");
var telephoneIn = document.getElementById("telephone");
var ageIn = document.getElementById("age");
// Arr of object Get data from local storage onload page 
// IF local storage is empty then while checking of empty, arr will be initialized AtLine(80)
var employees = JSON.parse(localStorage.getItem("employeeData")); // var employees = [];

// Function to use it to make an object of employee
function Employee(val1, val2, val3, val4, val5) {
    this.id = val1;
    this.eName = val2;
    this.email = val3;
    this.telephone = val4;
    this.age = val5;
}

// Add button function
document.getElementById("addBtn").onclick = function () {
    if (idIn.value == "" || nameIn.value == "" || emailIn.value == "" || telephoneIn.value == "" || ageIn.value == "") {
        alert("Please enter Data in missing Fields");
    } else {
        if (checkId(idIn.value)) {
            var emp = new Employee(idIn.value, nameIn.value, emailIn.value, telephoneIn.value, ageIn.value);
            employees.push(emp);
            localStorage.setItem("employeeData", JSON.stringify(employees));
            // If data added for the first time info message of thereis no data will be hidden
            document.getElementById("info-message").innerHTML = "";
            alert("Data saved");
        } else {
            alert("Repeated ID enter another");
        }
    }
};

// Reset button function
document.getElementById("resetBtn").onclick = function () {
    idIn.value = "";
    nameIn.value = "";
    emailIn.value = "";
    telephoneIn.value = "";
    ageIn.value = "";
};

// Display button function
document.getElementById("displayBtn").onclick = function () {
    // Check Input Elements aren't empty
    if (checkEmpty()) {
        // If no data in local storage this message will be visible.
        document.getElementById("info-message").innerHTML = "There is no data found!!";
    } else {
        // Get table of info 
        var infoTable = document.getElementById("info-table");
        infoTable.style = "visibility:none";
        // Get data from local storage
        var arr = JSON.parse(localStorage.getItem("employeeData"));
        // Before looping on data clear  table 
        infoTable.innerHTML = "<tr><th>ID</th><th>User Name</th><th>Email</th><th>Telephone</th><th>Age</th></tr>";
        for (var i = 0; i < arr.length; i++) {
            infoTable.innerHTML += "<tr><td>" + arr[i].id + "</td><td>" + arr[i].eName + "</td>" +
                "<td>" + arr[i].email + "</td><td>" + arr[i].telephone + "</td><td>" + arr[i].age + "</td></tr>";
        }
    }
};
// Function for checking repeated ID
function checkId(_id) {
    if (!checkEmpty()) {
        var arr = JSON.parse(localStorage.getItem("employeeData"));
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == _id) {
                return false;
            }
        }
        return true;
    } else {
        // Initiate Arr when local storage is null (No data in local storage)
        employees = [];
        return true;
    }
}
// Function to check if local storage is empty
function checkEmpty() {
    if (JSON.parse(localStorage.getItem("employeeData")) == null) {
        return true;
    } else {
        return false;

    }
}