//Create Student class with above all fields
//Write method (getDetails) to print all details of Student

enum Gender{
    Male = "Male",
    Female = "Female",
    Other = "Other"
}
type Address = {
    city : string;
    state : string;
    pincode : number;
}
type Courses = "HTML" | "CSS" | "JS" | "TS";
class Student{
    studentId : number;
    firstName : string;
    lastName : string;
    age : number;
    gender : Gender;
    studentAddress : Address;
    cgpa : number;
    interestedCourses : Courses[];
    constructor(studentId: number, firstName: string, lastName : string, age: number, gender: Gender, studentAddress: Address, cgpa: number, interestedCourses: Courses[]){
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.studentAddress = studentAddress;
        this.cgpa = cgpa;
        this.interestedCourses = interestedCourses;
    }
    getDetails = () => {
        console.log(`Student ID: ${this.studentId}`);
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`GPA: ${this.cgpa}`);
        console.log(`Address: ${this.studentAddress.city}, ${this.studentAddress.state} - ${this.studentAddress.pincode}`);
    }
}
const student1Address : Address = {
    city : "Hanamkonda",
    state : "Warangal",
    pincode : 506003
} 
const interestedCourses : Courses[] = ["HTML", "CSS"];
const student1 = new Student(1, "Usha", "Sri", 21, Gender.Female,student1Address,10, interestedCourses)
student1.getDetails();


//Create a generic type which takes any type of value and returns {value: ValueWeHavePassed }
//create this in separate file (like utils.ts) and use it in main file

import { returnValue } from "./utils";

const numericValue = returnValue<number>(2);
const stringValue = returnValue<string>("Usha Sri");

console.log("Numeric Value via Generic Function:",numericValue);
console.log("String Value via Generic Function:",stringValue);


// Create Student interface and create custom type to make all the properties as readonly, Without using typescript Readonly utility type


interface student {
    name : string,
    age : number, 
    address : Address,
    email : string,
}

type changeStudentReadOnly<T> = {
    readonly [P in keyof T] : T[P];
}

const newStudent : changeStudentReadOnly<student> = {
    name : "Usha Sri",
    age : 21,
    address : student1Address,
    email : "usha@gmail.com"
}

// newStudent.age = 10; throws an error


/* explore all other utility methods */

//  Partial<T> 

interface Car{
    name : string;
    model : string;
}

type PartialCar = Partial<Car>;

const car : PartialCar = {
    name : "Audi" //model is optional
}
console.log("Output of Partial Utility",car)

// ReadOnly<T>

interface Person{
    name: string;
    age : number;
}

type ReadOnlyPerson = Readonly<Person>;

const person : ReadOnlyPerson = {
    name : "Usha",
    age : 21,
}

// person.age = 20;  raises error as readonly


//Pick<T,K> 

interface Ticket{
    title: string,
    id : number,
    description : string,
}

type TicketIdAndTitle = Pick<Ticket,"title"|"id">;

const ticket : TicketIdAndTitle = {
    title : "Course ISsues",
    id : 123,
    //description: "Please check"  //gives error as only title and id are picked
}


console.log("Output of Pick Utility",ticket)

//Omit<T,K> 

interface Book{
    title : string;
    author : string;
    year : number;
}

type BookWithoutYear = Omit<Book, "year">

const book : BookWithoutYear = {
    title : "Wings of Fire",
    author : "Abdul Kalam",
    //year : 2020 raises error as year is omitted
}

console.log("Output of Omit Utility",book)

// Exclude<T,U>

type T = string | number |  boolean ;
type ExcludeStringAndBoolean = Exclude<T,string|boolean>

//const a : ExcludeStringAndBoolean = true; //error

//Extract<T,U>

type ExtractStringAndNumber = Extract<T,string|number>
//const b : ExtractStringAndNumber = true //error

//Required<T>
interface Props{
    id?: number;
    name?: string;
}

type RequiredProps = Required<Props>;

const props: RequiredProps = {
    id: 1,
    name: "Bob"
    // id and name are now required
};






