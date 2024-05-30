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
    return {...newStudent, ...toChangeValues}
}
console.log(updateNameAndEmail(newStudent, toChangeValues));
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
var allEmployees = [topLead, Lead2, Lead1];
console.log(Lead1);
//task4
//Write a function to iterate through employees and print {Employee.name} is Lead , if they are they are lead otherwise {Employee.name} is not lead

var printLeads = function (allEmployees) {
    function checkLead(employee) {
        for(var i=0;i<allEmployees.length;i++){
            if(allEmployees[i].employeeLead && allEmployees[i].employeeLead===employee){
                return true;
            }
        }
        return false;
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
