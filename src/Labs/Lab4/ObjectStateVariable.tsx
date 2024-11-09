import React, { useState } from "react";

export default function ObjectStateVariable() {
  const [person, setPerson] = useState({ name: "Peter", age: 24 }); // Initialize person object with name and age

  return (
    <div>
      <h2>Object State Variables</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre> {/* Display person as JSON */}
      <input
        type="text"
        value={person.name} // Set input value to person.name
        onChange={(e) => setPerson({ ...person, name: e.target.value })} // Update name property
      />
      <input
        type="number"
        value={person.age} // Set input value to person.age
        onChange={(e) =>
          setPerson({ ...person, age: parseInt(e.target.value) || 0 })
        } // Update age property
      />
      <hr />
    </div>
  );
}
