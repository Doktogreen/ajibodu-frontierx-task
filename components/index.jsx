import React from "react";
import "./styles.css";

import Examples from "./examples";

class AccordionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOpenIndexList: ["1"]
    };
  }

  render() {
    return (
      <div className="App">
        <Examples.AccordionItemExample />
        <hr />
        <Examples.AccordionGroupExample />
      </div>
    );
  }
}

export default AccordionIndex;
