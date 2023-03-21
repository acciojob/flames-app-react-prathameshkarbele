import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    function print() {
      const input1 = document.getElementById("input1");
      const input2 = document.getElementById("input2");

      console.log(input1.value);
      console.log(input2.value);
      let str1 = "";
      let str2 = "";
      for (let i = 0; i < input1.value.length; i++) {
        for (let j = 0; j < input2.value.length; j++) {
          if (input1.value.charAt(i) === input2.value.charAt(j)) {
            str1 =
              input1.value.substring(0, i) +
              input1.value.substring(i + 1, input1.value.length);
            str2 =
              input2.value.substring(0, j) +
              input2.value.substring(j + 1, input2.value.length);
            break;
          }
        }
      }
      console.log((str1.length + str2.length) % 6);
      relationship((str1.length + str2.length) % 6);
    }

    function relationship(str) {
      const answer = document.getElementById("answer");
      let ans = "";
      if (str % 6 == 0) {
        ans = "Siblings";
        console.log("Siblings");
      } else if (str % 6 == 1) {
        ans = "Friends";
        console.log("Friends");
      } else if (str % 6 == 2) {
        ans = "Love";
        console.log("Love");
      } else if (str % 6 == 3) {
        ans = "Affection";
        console.log("Affection");
      } else if (str % 6 == 4) {
        ans = "Marriage";
        console.log("Marriage");
      } else {
        ans = "Enemy";
        console.log("Enemy");
      }
      answer.innerHTML = ans;
    }

    function clear() {
      const input1 = document.getElementById("input1");
      const input2 = document.getElementById("input2");
      const answer = document.getElementById("answer");

      input1.value = "";
      input2.value = "";
      answer.innerHTML = "";
    }

    return (
      <div id="main">
        {/* Do not remove the main div */}
        <input
          type="text"
          data-testid="input1"
          id="input1"
          placeholder="First Name"
        />
        <br></br>
        <br></br>
        <input
          type="text"
          data-testid="input2"
          id="input2"
          placeholder="Second Name"
        />
        <br></br>
        <br></br>
        <button
          onClick={print}
          id="calculate_relationship"
          data-testid="calculate_relationship"
        >
          Calculate Relationship Future
        </button>
        <br></br>
        <br></br>
        <h3 data-testid="answer" id="answer">
          Output
        </h3>
        <br></br>
        <br></br>
        <button onClick={clear} data-testid="clear">
          Clear inputs and relationship status
        </button>
      </div>
    );
  }
}

export default App;
