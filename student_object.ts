type courses  = "HTML" | "CSS"  | "JAVASCRIPT" | "TYPESCRIPT" | "REACTJS"


type address_type = {
    city : string,
    state : string,
    pincode :number
}
type student_via_type = {
    studentName : string,
    studentId : number,
    studentEmail : string,
    studentAddress : address_type
    studentIsVerified : boolean,
    studentInterestedCourses : courses[] //[courses]
}


interface address_interface  {
    city : string,
    state : string,
    pincode :number
}

interface student_via_interface {
    studentName : string,
    studentId : number,
    studentIsVerified : boolean,
    studentEmail : string,
    studentAddress : address_interface,
    studentInterestedCourses : courses[] //[courses]
}

let newStudent1 :  student_via_type =  {
    studentName :"USHA" , 
    studentId:1, 
    studentIsVerified:true , 
    studentEmail : "usha@gmail.com",
    studentInterestedCourses: ["HTML","CSS"],
    studentAddress : {
        city : "Warangal",
        state : "Telangana",
        pincode : 506003
    }
}

let newStudent2 :  student_via_interface =  {
    studentName :"MAMATHA" , 
    studentId:2 , 
    studentIsVerified:true , 
    studentEmail : "mamatha@gmail.com",
    studentInterestedCourses: ["HTML","CSS","JAVASCRIPT"],
    studentAddress : {
        city : "Karimnagar",
        state : "Telangana",
        pincode : 506007
    }
}


console.log(newStudent1);
console.log(newStudent2);
