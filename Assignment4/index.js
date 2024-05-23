// Hi Team, Assignment for today:
var toChangeValues = {
    name: "UshaSri",
    email: "ushaa@gmail.com"
};
var newStudent = {
    name: "Usha",
    age: 20,
    email: "usha@gmail.com",
    address: {
        city: "Warangal",
        state: "Telangana",
        pincode: 506003
    }
};
function updateNameAndEmail(newStudent, toChangeValues) {
    for (var key in toChangeValues) {
        newStudent["".concat(key)] = toChangeValues[key];
    }
    console.log(newStudent);
}
updateNameAndEmail(newStudent, toChangeValues);
function IsStringType(value) {
    var output = (typeof value === 'string' ? 'Yes' : 'No');
    console.log(output);
}
var a = "Usha";
var r1 = "Yes"; //cant assign no as  a is String
var b = 12;
var r2 = "No"; //cant assign Yes as b is not String
IsStringType("Hello");
IsStringType(123);
var topLead = {
    employeeName: "Achyuth",
    employeeAge: 20,
    employeeID: 123,
};
var Lead2 = {
    employeeName: "Usha",
    employeeAge: 21,
    employeeID: 124,
    employeeLead: topLead
};
var Lead1 = {
    employeeName: "Usha1",
    employeeAge: 21,
    employeeID: 125,
    employeeLead: Lead2
};
var newEmployee = {
    employeeName: "Usha2",
    employeeAge: 21,
    employeeID: 126,
    employeeLead: Lead1
};
var allEmployees = [topLead, Lead1, Lead2, newEmployee];
console.log(newEmployee);
//task4
//Write a function to iterate through employees and print {Employee.name} is Lead , if they are they are lead otherwise {Employee.name} is not lead
var leadArray = new Array;
allEmployees.forEach(function (employee) {
    if (employee.employeeLead) {
        leadArray.push(employee.employeeLead.employeeID);
    }
});
var printLeads = function (allEmployees) {
    function checkLead(employee) {
        var islead = false;
        leadArray.forEach(function (id) {
            if (id === employee.employeeID) {
                islead = true;
            }
        });
        return islead;
    }
    allEmployees.forEach(function (employee) {
        if (checkLead(employee) == true) {
            console.log("".concat(employee.employeeName, " is Lead"));
        }
        else {
            console.log("".concat(employee.employeeName, " is not Lead"));
        }
    });
};
printLeads(allEmployees);
