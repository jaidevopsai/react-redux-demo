export function sum(a: number, b: number): number {
  return a + b;
}
export function multiply(a: number, b: number): number {
  return a * b;
}   
// export function divide(a: number, b: number): number {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero");
//   }
//   return a / b;
// }
// export function subtract(a: number, b: number): number {
//   return a - b;
// }
// export function square(a: number): number {
//   return a * a;
// }  
// export function squareRoot(a: number): number {
//   if (a < 0) {
//     throw new Error("Cannot take square root of a negative number");
//   }
//   return Math.sqrt(a);
// }

// export function power(base: number, exponent: number): number {
//   return Math.pow(base, exponent);
// }
// export function factorial(n: number): number {
//   if (n < 0) {
//     throw new Error("Cannot compute factorial of a negative number");
//   }
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }