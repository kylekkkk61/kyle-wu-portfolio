import { render } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { SectionContainer } from "./section-container"
import React from "react"

describe("SectionContainer", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <SectionContainer>
        <div>Test Content</div>
      </SectionContainer>,
    )
    expect(getByText("Test Content")).toBeDefined()
  })
})
