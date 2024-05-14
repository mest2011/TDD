const FIZZ = "Fizz";
const BUZZ = "Buzz";

export default function fizzBuzz(number) {
  if (multipleOf(number, 3) && multipleOf(number, 5))
    return FIZZ + BUZZ;
  if (multipleOf(number, 3)) return FIZZ;
  if (multipleOf(number, 5)) return BUZZ;

  return number;
}

function multipleOf(number, multiple) {
  return number % multiple === 0;
}
