import React from "react";
import { render, act } from "@testing-library/react-native";

import Profile from "./index";

describe("Profile tests", () => {
  it("test request get data profile", async () => {
    const { findByTestId } = render(<Profile userName="savio777" />);

    await act(async () => {
      const imageRender = await findByTestId("avatar");
      const textName = await findByTestId("name");

      expect(imageRender._fiber.type).toEqual("Image");
      expect(textName.props.children).toEqual("Sávio");
    });
  });
});
