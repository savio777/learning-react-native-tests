import React from "react";

import { fireEvent, render } from "@testing-library/react-native";

import App from "../App";

describe("App first tests", () => {
  it("checking inputs placeholder App", () => {
    const { getByTestId } = render(<App />);

    const inputName = getByTestId("name");

    console.log("placeholder input name:", inputName.props.placeholder);

    expect(inputName).toBeTruthy();
    expect(getByTestId("last-name")).toBeTruthy();
  });

  it("checks if user data has been loaded", () => {
    const { getByTestId } = render(<App />);

    const inputName = getByTestId("name");
    const inputLastName = getByTestId("last-name");

    expect(inputName.props.value).toEqual("João");
    expect(inputLastName.props.value).toEqual("Silva");
  });

  it("checks if title render correctly", () => {
    const { getByTestId } = render(<App />);

    const titleScreen = getByTestId("title-screen");

    expect(titleScreen.props.children).toContain("Aprendendo");
  });

  it("test async request", async () => {
    const { getByTestId, findByTestId } = render(<App />);

    fireEvent.changeText(getByTestId("name"), "Sávio");
    fireEvent.changeText(getByTestId("last-name"), "Fontes");

    fireEvent.press(getByTestId("button-save"));

    const responseFeedback = await findByTestId("data-loaded");

    expect(responseFeedback.props.children).toContain("Sávio");
  });
});
