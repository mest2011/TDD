import fizzBuzz from "./fizzBuzz";

describe("Function to verify if it is fizzBuzz", () => {
  const numberNonDivisiblePerThreeAndFive = [1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19, 22, 23, 26, 28, 29, 31, 32, 34, 37, 38, 41, 43, 44, 46, 47, 49, 52, 53, 56, 58, 59, 61, 62, 64, 67, 68, 71, 73, 74, 76, 77, 79, 82, 83, 86, 88, 89, 91, 92];

  it("must return a number", () => {
    numberNonDivisiblePerThreeAndFive.map((number)=>expect(fizzBuzz(number)).toBe(number));
    
  });

  it("must return a string Fizz", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("must return a string BUZZ", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("must return a string FizzBuzz", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
});
