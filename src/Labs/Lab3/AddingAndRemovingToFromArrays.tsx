import React from "react";

export default function AddingAndRemovingToFromArrays() {
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2"];
  let todoArray = [<li key="1">Buy milk</li>, <li key="2">Feed the pets</li>];

  // Adding new items to the arrays
  numberArray1.push(6);
  stringArray1.push("string3");
  todoArray.push(<li key="3">Walk the dogs</li>);

  // Removing items from the arrays
  numberArray1.splice(2, 1); // remove 1 item starting at index 2
  stringArray1.splice(1, 1); // remove 1 item starting at index 1

  return (
    <div id="wd-adding-removing-from-arrays">
      <h4>Add/remove to/from arrays</h4>
      numberArray1 = {numberArray1.join(" ")} <br />
      stringArray1 = {stringArray1.join(" ")} <br />
      Todo list:
      <ol>{todoArray}</ol>
      <hr />
    </div>
  );
}
