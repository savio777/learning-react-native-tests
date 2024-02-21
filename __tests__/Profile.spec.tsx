import React from "react";
import { act, render } from "@testing-library/react-native";

import Profile from "../components/Profile";

describe("Profile tests", () => {
  it("test request get data profile", async () => {
    const { findByTestId } = render(<Profile userName="savio777" />);

    const imageRender = await findByTestId("avatar");
    const textName = await findByTestId("name");

    expect(imageRender._fiber.type).toEqual("Image");
    expect(textName.props.children).toEqual("Sávio");
  });
});
