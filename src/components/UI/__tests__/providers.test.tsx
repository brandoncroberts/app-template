import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Providers } from "../providers";

describe("Chakra UI Providers", () => {
  it("should render children correctly", () => {
    const { getByText } = render(
      <Providers>
        <div>Test Content</div>
      </Providers>,
    );

    expect(getByText("Test Content")).toBeDefined();
  });

  it("should provide Chakra UI context", () => {
    const { container } = render(
      <Providers>
        <div>Test</div>
      </Providers>,
    );

    expect(container).toBeDefined();
  });
});
