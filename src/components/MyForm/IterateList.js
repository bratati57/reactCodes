import React from "react";
function IterateList() {
  let cars = [
    { name: "Tata", model: "nexon" },
    { name: "Maruthi", model: "swift" },
    {name:"Hyundai", model:"i20"}
  ];
//   console.log(cars[0].name);
  return (
    <div>
      <ul>
        {cars.map((carr, index) => (
          <li key={index}>
            The car name is {carr.name} and its model is {carr.model}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IterateList;
