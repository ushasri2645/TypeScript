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



function updateNameAndEmailViaPick(newStudent: Student,toChangeValues: toChange){
    return {...newStudent, ...toChangeValues}
}


console.log(updateNameAndEmailViaPick(newStudent,toChangeValues))

//task2 
// Create a type which takes input type and returns Yes if passed type is string otherwise No

type IsString<T> = T extends string ? "Yes" : "No";
function IsStringType<T>(value :T): void{
    type t = IsString<typeof value>
    const output : t = (typeof value === 'string' ? 'Yes' : 'No') as t;
    console.log(output)    
}


let a1="Usha";
let r1: IsString<typeof a1>="Yes"; //cant assign no as  a is String
let b=12
let r2: IsString<typeof b>="No"; //cant assign Yes as b is not String


IsStringType("Hello");
IsStringType(123);


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


const allEmployees : EmployeeHeirarchy[] = [topLead, Lead2, Lead1]
console.log(Lead1);


//task4
//Write a function to iterate through employees and print {Employee.name} is Lead , if they are they are lead otherwise {Employee.name} is not lead



const printLeads = (allEmployees : EmployeeHeirarchy[]) : void  => {
    function checkLead(employee : EmployeeHeirarchy) : boolean{
        for(var i=0;i<allEmployees.length;i++){
            if(allEmployees[i].employeeLead && allEmployees[i].employeeLead===employee){
                return true;
            }
        }
        return false;
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
