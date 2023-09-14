
function greet(){
    console.log("Hey !!");
}
greet();

  // changing above normal function to the arrow function below

const greet = (count) => {
  // taking statements 
    for (let i = 0; i < count; i++) 
    console.log("Hello World");
};

greet(3);


const square = (num) => {
    // taking expressions
    return num * num;
};

console.log(square(3));
