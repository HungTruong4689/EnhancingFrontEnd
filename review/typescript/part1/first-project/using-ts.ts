const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement; //cast value to make sure this value is not null
const input2 = document.getElementById("num2")! as HTMLInputElement;

//advatage of types in typescript
function add(num1:number, num2:number):number {
  return num1 + num2;
}

if (button) {
  button.addEventListener("click", function() {
    console.log(add(+input1.value, +input2.value));
  });
}

