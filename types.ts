
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];


let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

//has to match exact order and type in array
//has to match only the inital pattern but anything after can pass
let strNumTuple: [string, number];


myString = "Hello World";
myNum = 22;
myBool = true;
myVar = 5;

strArr = ["Hello", "World"];
numArr = [1, 2, 3];
boolArr = [true, false, true];

strNumTuple = ["Hello", 4];

//can be null or undefined
let myVoid: void = null;
let myNull: null = undefined;
let myUndefined: undefined = null;

console.log(myVoid);
