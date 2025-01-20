// Question 1 (Block Scope)
{
  let a = 1
  let b = 2

  console.log(a); //this will give the output in the console as 1
  console.log(b); //this will give the output in the console as 2
}
console.log(a) //this will give an error as a in not defined , note this is an error and not undefined
console.log(b) //when the above will give the error the code execution will stop js being an interpreter so this line wont be excuted.

//Question arises what's the diffrence between not defined and undeifned :
//Answer : Not defined is a state where variables dont even exists giving an error whereas, undefined is state where varible is there but no
//value is assigned to it.

//output:
//1
//2
//error a is not defined


// Question 2 (Hoisting)
console.log(a) //this will give undefined as we are trying to acess the variable before initializing but being a var declarative it gives undefined due to
              //the concept of hositing.
var a = 5
// and
console.log(name) //trying to access the value before initializing before declared with var initialially it contians undefined.
var name = 'John'

//output:
//undefined
//undefined

//Understanding question no 2
//hoisting is possible through all the declarative as let, var and const
// the only this that changes is the output that it gives it case of var
//it will give undefined because declarating varibales with initially decalres undefined in it
//indicatin space has been created with no values so when accessed ealier gives undefined but no error.
//in case of let and const the space are created but undefined is not given to them initially so when we try to
//access them before gives error that the value cant be accessed before initialization

//case of hoisting with var
/*
when we declare a varibale using var a memory is created for it with value as undefined indicating there is a space created for the varibale
by there has been no value initialized to it till now so undefined.
*/
console.log(a); //as a is declared var the scope is global and as it beign assesed before intiliaztion being declared var its undefined
var a = 5;
// and
console.log(name);
var name = "John";

//case of dead temporal zone
/*
when we try to achieve 
*/
console.log(a); //as a is declared let, the scope is script and as it beign assesed before intiliaztion being declared let as <value unavailable>
//hence giving error, this state is called temporal dead zone the state between MEP and CEP memory execution phase and code execution phase.
let a = 5;
// and
console.log(name);
let name = "John";

//SHORT AND SIMPLE HOISTING WITH VAR STORES VALUE AS UNDEFNIED IN GLOBAL SCOPE RESULTING IN UNDFFINED WITH NO ERROR/
//HOSITING WITH LET AND CONST STORES VALUES AS <VALUE UNAVAILABLE> IN SCRIPT SCOPE GIVING ERROR


// Question 3 (Shadowing)
var x = 20

function foo() {
  console.log(x)
  var x = 10
}
foo()

// ******* //

foo()
var foo = 20
function foo() {
  console.log('Calling foo')
}
foo()

// Question 4 (Closure)
function outer() {
  function inner() {
    console.log(x)
  }
  const x = 5
  return inner
}
const inner = outer()
inner()

// Question 5 (Event Loop and Callback Queue)
console.log('Start')
setTimeout(() => {
  console.log('Timeout')
}, 0)
console.log('End')

// Question 6 (For loop and Closure)
// print the numbers after a delay of 1s
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000)
}

// Question 7 (Callback Queue and Microtask Queue)
setTimeout(() => {
  console.log('Timeout')
}, 0)
Promise.resolve().then(() => console.log('Promise'))
console.log('End')

// Question 8 (Async Await)
async function foo() {
  return 'Hello World'
}

const result = foo()
console.log(result)

// Question 9 (Array Methods)
const numbers = [10, 20, 30, 40, 50]

// Question 10 (typeof null)
let a = null
console.log(typeof null)

// Question 11 (Why are we able to change the arr when it is declared using const)
const arr = [1,2,3]
arr[4] = 5

console.log(arr.length)


// Question 12 (Deep Copy and Shallow Copy)
const user1 = {
  name: 'John',
  age: 25,
  address: {
    city: 'Mumbai',
    state: 'Maharashtra',
  },
}

const user2 = user1

user2.name = 'Ramesh'
user2.address.city = 'Pune'

console.log(user1)
console.log(user2)

// Question 13 (Destructuring)
const [a, b] = [10, 'Hii']
console.log(a, b)

const { age, address } = user1


// Question 14 (Constructor Function)
function abc() {
  console.log('hii')
}

const value = new abc()

// Question 15
// function foo(a, ...rest) {
//   console.log(a, rest);
// }

// foo(1, 2, 3, 4, 5)
