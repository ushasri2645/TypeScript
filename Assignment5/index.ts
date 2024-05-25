//Create any type with 5-6 properties each of different type of values and few as optional properties and Create another type from it with all properties as required (Without using typescript default Required typ
    
type Address2 = {
    city: string,
    state : string,
    pincode : number

}

type optioanlStudent = {
    name : string,
    age? : number,
    isverified?: boolean,
    email : string,
    address? : Address2,
    phone? : number;
}


type requiredStudent = {
    [property in keyof optioanlStudent]-? : optioanlStudent[property] //making all the properties required using '-?'
}

const studentRequired : requiredStudent = {
    name : "usha",
    age : 21,
    isverified: true,
    email : "usha@gmail.com",
    address :{city:"wgl",state : "telangana" , pincode:506003},
    phone : 6303961097
}   


//Write a function to take object as parameter (both keys and values are string) and return concat all keys along with values
// Ex Input: {
//     name: "User",
//     email: "user@gmail.com"
// }

// Output: "name: User, email: user@gmail.com"


const studentNameEmail : optioanlStudent = {
    name : "usha",
    email : "usha@gmail.com",
    phone : 6303961097
}

function printByConcatenating(student: optioanlStudent) {
    let result ='';
    for (const key in student) {
        const studentKey = key as keyof optioanlStudent;
        result += `${studentKey}: ${student[studentKey]}, `;
    }
    result = result.slice(0, -2);
    console.log(result)
  }
  

printByConcatenating(studentNameEmail)


//task 3:
// To make above problem more complex (property value can be either string or object of same recursive type with any nested objects)
// Ex Input: {
//     name: "User",
//     email: "user@gmail.com",
//     address: {
//         city: "Hyderabad",
//         state: "Telangana"
//     }
// }
// Output: "name: User, email: user@gmail.com, city: Hyderabad, state: Telangana"
// For the above problem use util function with namespace


namespace Utils{
    export function printObjects(objs : requiredStudent) : string{
        let result='';
        function printObject(obj : {[property:string] : any}){
            for(const property in obj){
                const value = obj[property];
                if(typeof value === 'object'){
                    printObject(value);
                }
                else{
                    result+=`${property} : ${value}, ` 
                }
            }
        }
        printObject(objs)
        result=result.slice(0,-2);
        return result;
    }
}


const newStudent4 : requiredStudent = {
    name: "Usha",
    age: 20,
    email: "usha@gmail.com",
    isverified :true,
    address: {
        city: "Warangal",
        state: "Telangana",
        pincode: 506003
    },
    phone : 123456789,
};

console.log(Utils.printObjects(newStudent4));