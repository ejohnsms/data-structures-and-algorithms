
// compose
// takes a list of functions
// and returns a function that takes x
// and returns a reducer function
// where y is the accumulator and
// f is the current
// the reducer returns f of y with x as the initial value for the reducer
// processes left to right
export const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

// pipe
// takes a list of functions
// and returns a function that takes x
// and returns a reducer function
// where y is the accumulator and
// f is the current
// the reducer returns f of y with x as the initial value for the reducer
// processes right to left
export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

// curry
// takse function f and an array of arguments arr
// and returns a function which takse the spread array of arguments
// and returns a function which takes argument a
// and returns f of ...a
// or returns curry f of a
export const curry = (f, arr = []) => (...args) => (
  a => a.lenth === f.length ?
    f(...a) :
    curry(f,a)
)([...arr, ...args])


// Identity
const Identity = value => ({
  map: fn => Identity(fn(value))
});

// trace function for compose and pipe
export const trace = label => value => {
  console.log(`${label}: ${value}`);
  return value;
}

// method is a string - map, flatMap, then
const composeM = method => (...ms) => (
  ms.reduce((f,g) => x => g(x)[method](f))
);


// const composeMap = (...ms) => (
//   ms.reduce((f,g) => x => g(x).map(f)) // g(x)[method](f)
// );
