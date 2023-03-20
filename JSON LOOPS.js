// for loop :

let myArray = [1,2,3,4,5,6];
for(let i = 0; i< myArray.length; i++) {
    console.log(myArray[i]);
}
/* 
Output:
1
2
3
4
5
6
*/



// for .....of :
let myNumber = [7,5,8,4];
for(let value of myNumber) {
    console.log(value);

}
/* output:
7
5
8
4
*/
let myObject = {
    "name" : "Rk",
    "age" : 22,
    "qualification" : "UG",
    "Degree" : "BE",
    "Hobbies" : ["reading","swmming","cycling"],
}
for(let value of Object.values(myObject)) {
    console.log(value);
}

/* output 
Rk
22
UG
BE
['reading','swmming','cycling']
*/

for(let key of Object.keys(myObject)) {
    console.log(key);
}
/*output
name
age
qualification
Degree
Hobbies
*/



// for.....in

let myDocu = [1,2,4,5,6,9];
for(let number in myDocu) {
    console.log(myDocu[number]);
}

/* output 
1
2
4
5
6
9
*/

let myObject2 = {
    "name" : "Rk",
    "age" : 22,
    "qualification" : "UG",
    "Degree" : "BE",
    "Hobbies" : ["reading","swmming","cycling"],
}

for(let key in myObject2) {
    console.log(key);
}
// output : key will be printed.

for(let key in myObject2) {
    console.log(myObject2[key]);
}

//ourput : value of key will be printed.

//for....each:

let myfunction = [1,2,3,4];

myfunction.forEach((value,index) =>{
    console.log(value,index);
})

/*output;
1 0 // 1 is value 0 is index position of 1,
2 1 // 2 is value 0 is index position of 2,
3 2 // 3 is value 0 is index position of 3,
4 3 // 4 is value 0 is index position of 4,
*/