//Create any type with 5-6 properties each of different type of values and few as optional properties and Create another type from it with all properties as required (Without using typescript default Required typ
var studentRequired = {
    name: "usha",
    age: 21,
    isverified: true,
    email: "usha@gmail.com",
    address: { city: "wgl", state: "telangana", pincode: 506003 },
    phone: 6303961097
};
//Write a function to take object as parameter (both keys and values are string) and return concat all keys along with values
// Ex Input: {
//     name: "User",
//     email: "user@gmail.com"
// }
// Output: "name: User, email: user@gmail.com"
var studentNameEmail = {
    name: "usha",
    email: "usha@gmail.com",
    phone: 6303961097
};
function printByConcatenating(student) {
    var result = '';
    for (var key in student) {
        var studentKey = key;
        result += "".concat(studentKey, ": ").concat(student[studentKey], ", ");
    }
    result = result.slice(0, -2);
    console.log(result);
}
printByConcatenating(studentNameEmail);
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
var Utils;
(function (Utils) {
    function printObjects(objs) {
        var result = '';
        function printObject(obj) {
            for (var property in obj) {
                var value = obj[property];
                if (typeof value === 'object') {
                    printObject(value);
                }
                else {
                    result += "".concat(property, " : ").concat(value, ", ");
                }
            }
        }
        printObject(objs);
        result = result.slice(0, -2);
        return result;
    }
    Utils.printObjects = printObjects;
})(Utils || (Utils = {}));
var newStudent4 = {
    name: "Usha",
    age: 20,
    email: "usha@gmail.com",
    isverified: true,
    address: {
        city: "Warangal",
        state: "Telangana",
        pincode: 506003
    },
    phone: 123456789,
};
console.log(Utils.printObjects(newStudent4));
