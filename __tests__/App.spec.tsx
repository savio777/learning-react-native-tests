import React from "react";

import { render } from "@testing-library/react-native";

import App from "../App";

test("checking inputs placeholder App", () => {
  const { getByTestId } = render(<App />);

  const inputName = getByTestId("name");
  const inputLastName = getByTestId("lastName");

  console.log("placeholder input name:", inputName.props.placeholder);

  expect(inputName).toBeTruthy();
});
