import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { SectionContainer } from "./section-container"

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
