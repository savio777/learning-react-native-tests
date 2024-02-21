import React from "react";
import { render, act } from "@testing-library/react-native";

import Profile from "./index";

describe("Profile tests", () => {
  it("test request get data profile avatar", async () => {
    const { findByTestId } = render(<Profile userName="savio777" />);

    await act(async () => {
      const imageRender = await findByTestId("avatar");
      expect(imageRender._fiber.type).toEqual("Image");
    });
  });

  it("test request get data profile name", async () => {
    const { findByTestId } = render(<Profile userName="savio777" />);

    const textName = await findByTestId("name");

    expect(textName.props.children).toEqual("Sávio");
  });
});
