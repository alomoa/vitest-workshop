import { describe, expect, it } from "vitest";
import { sum } from "../../src/utils/calculation";

describe("sum", () => {
  it("Should add two values correctly", () => {
    expect(sum(1, 2)).eq(3);
  });

  it("Should add 3 values correctly", () => {
    expect(sum(1, 2, 3)).eq(6);
  });

  it("Should add string numbers", () => {
    expect(sum("1", "3")).eq(4)
  })

  it("Should throw error if none-numbers are given", () => {
    expect(() => sum("hello", "1")).toThrow()
  })
});

describe("difference between toEqual and toBe", () => {
  it("should have the same values", () => {
    expect({thing: "thing"}).toEqual({thing: "thing"})
  })

  it("should have the same reference", () => {
    const obj = {thing: "thing"}
    const obj2 = {thing: "thing"}
    expect(obj).toBe(obj) // This will pass
    // expect(obj).toBe(obj2) // This will fail
  })
})