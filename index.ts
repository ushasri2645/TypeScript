let a = "some random sentence"
let age = 21

let aa : string = "another random sentence"
let agee : number = 22

let isdone : boolean = false

let names : [string] = ["varun"]

let namess: string[]=[]

function add(num1 :number,num2: number) {
    return num1+num2;
}
function add1(num1 :number,num2: number) : string{
    return ""+num1+num2;
}

type name = string 
interface ShoppingItem{
    name : name | number; //union type - multiple types
    isMarked : boolean,
    isDeleted? : boolean // adding ? makes this field optional like optioanl parameter
}

type ShoppingItem2 = {
    name : string;
    isMarked : boolean,
    isDeleted? : boolean // adding ? makes this field optional like optioanl parameter
}

let shoppingListItem : ShoppingItem = {
    name : 20,
    isDeleted : true,
    isMarked : true
}

type course = "javascript" | "typescript"
// let which_course : course = "html/css" givs error as html/css is not part of 
// 

let usha //this is "any" type 


