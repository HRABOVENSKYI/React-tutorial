import React from "react";
import ReactDom from "react-dom";

function Greering() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => (
  <h2>
    Jamaika <Word />
  </h2>
);
const Word = () => "Cool";
const Message = () => {
  return <p>This is my message</p>;
};

ReactDom.render(<Greering />, document.getElementById("root"));
