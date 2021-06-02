import React from "react";
import ReactDom from "react-dom";

function Greering() {
  return (
    <React.Fragment>
      <div>
        <h3>hello people</h3>
        <ul>
          <li>
            <a href="#">hello shmorld</a>
          </li>
        </ul>
      </div>
      <div>eeeeeeeeeeeeeeee</div>
    </React.Fragment>
  );
}

ReactDom.render(<Greering />, document.getElementById("root"));
