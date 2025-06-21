import { sum, multiply } from "./sumJest";

describe("sum function", () => {
  // This is a Jest test suite for the sum function
  it("should return the sum of two positive numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("adds 0 + 0 to equal 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("adds 100 + 200 to equal 300", () => {
    expect(sum(100, 200)).toBe(300);
  });

  test("adds -5 + -7 to equal -12", () => {
    expect(sum(-5, -7)).toBe(-12);
  });

  it("should return the multiplication of two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
