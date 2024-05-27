// Hi Team, Assignment for today:

//task 1
//Create a function to update few properties from Student object : it shouldn’t allow all properties, restrict type to allow to accept name and email (and don’t hard code name and email, it should be derived from Student type)

type Address = { 
    city:string;
    state:string;
    pincode:number
}
  
type Student = {
    name : string;
    age : number;
    email : string;
    address : Address
}


type toChange = Pick<Student,"name" | "email">

const toChangeValues: toChange = {
    name : "UshaSri",
    email:"ushaa@gmail.com"
}

const newStudent : Student = {
    name : "Usha",
    age : 20,
    email:"usha@gmail.com",
    address : {
        city : "Warangal",
        state:"Telangana",
        pincode : 506003
    }
}



function updateNameAndEmail(newStudent: Student,toChangeValues: toChange){
    for(const key in toChangeValues){
        newStudent[`${key}`] = toChangeValues[key];
    }
    console.log(newStudent)
}


updateNameAndEmail(newStudent,toChangeValues)



//task2 
// Create a type which takes input type and returns Yes if passed type is string otherwise No

type IsString<T> = T extends string ? "Yes" : "No";

let a="Usha";
let r1: IsString<typeof a>="Yes"; //cant assign no as  a is String
let b=12
let r2: IsString<typeof b>="No"; //cant assign Yes as b is not String





//task3
// Create an employee lead relationship with example

type EmployeeHeirarchy = {
    employeeName : string;
    employeeID : number;
    employeeAge :number;
    employeeLead? : EmployeeHeirarchy;
}

const topLead : EmployeeHeirarchy = {
    employeeName : "Achyuth",
    employeeAge : 20,
    employeeID : 123,
}

const Lead2 : EmployeeHeirarchy = {
    employeeName : "Usha",
    employeeAge : 21,
    employeeID : 124,
    employeeLead : topLead
}
const Lead1 : EmployeeHeirarchy = {
    employeeName : "Usha1",
    employeeAge : 21,
    employeeID : 125,
    employeeLead : Lead2
}
const newEmployee : EmployeeHeirarchy = {
    employeeName : "Usha2",
    employeeAge : 21,
    employeeID : 126,
    employeeLead : Lead1
}

const allEmployees : EmployeeHeirarchy[] = [topLead, Lead1, Lead2, newEmployee]
console.log(newEmployee);


//task4
//Write a function to iterate through employees and print {Employee.name} is Lead , if they are they are lead otherwise {Employee.name} is not lead

const leadArray = new Array<number>;
allEmployees.forEach(employee=>{
    if(employee.employeeLead){
        leadArray.push(employee.employeeLead.employeeID);
    }
})


const printLeads = (allEmployees : EmployeeHeirarchy[]) : void  => {
    function checkLead(employee : EmployeeHeirarchy) : boolean{
        let islead = false;
        leadArray.forEach(id => {
            if(id===employee.employeeID){
                islead = true
            }
        });
        return islead;
    }
    allEmployees.forEach(employee=>{
        if(checkLead(employee)==true){
            console.log(`${employee.employeeName} is Lead`);
        }
        else{
            console.log(`${employee.employeeName} is not Lead`);
         }
    })
}

printLeads(allEmployees);
