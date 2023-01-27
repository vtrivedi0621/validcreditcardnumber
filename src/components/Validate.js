import React, { useEffect, useState } from "react";

export default function Validate() {
  const [num, setNum] = useState("");
  const [message, setMessage] = useState("");
  //making sure console.log only runs on certain renders
  useEffect(() => {
    validCard();
  }, [num]);
  const inputHandler = (e) => {
    setNum(e.target.value);
  };
  // Function to add one to the state
  const validCard = () => {
    if (num === "") {
      console.log("enter value");
    } else {
      let arr = (num + "")
        .split("")
        .reverse()
        .map((x) => parseInt(x));
      let lastDigit = arr.splice(0, 1)[0];
      let sum = arr.reduce(
        (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
        0
      );
      sum += lastDigit;
      if (sum % 10 === 0) {
        console.log("valid");
        setMessage("This is a Valid Number");
      } else {
        console.log("Invalid");
        setMessage("This is not a Valid Number");
      }
    }
  };

  {/* console.log(isValidCardNo('1234567890123456'));  // false
      console.log(isValidCardNo('4408041234567893'));  // true
      console.log(isValidCardNo('38520000023237'));  // true
      console.log(isValidCardNo('4222222222222'));  // true */}
  return (
    <div className="main">
      <h1>Welcome to Credit Card Validator!</h1>
      <p>Enter Card Number: </p>
      
      <p>
        <input type="text" onChange={inputHandler} value={num} />
      </p>
      
      
      
      <p>{message}</p>
    </div>
  );
}
  

   