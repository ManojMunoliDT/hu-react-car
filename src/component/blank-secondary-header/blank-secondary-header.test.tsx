import React from "react";
import ReactDOM from "react-dom";
import BlankSecondaryHeader from "./blank-secondary-header";

import {render} from "@testing-library/react";

it("renders without crashing", () => {
  render(<BlankSecondaryHeader/>);
})