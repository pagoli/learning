//$ MEMOIZATION (Dave Gray)
//  => to ask a function to remember the result.

//& 2 React methods
// React.Memo() & useMemo()

//& Memoization should only be added to pure functions
//- Pure Functions:
//- => same input always provides the same output;
//- => They also do not rely on any external state or data, and cannot modify any external variables.

//  Example (for Vanilla JS WebApp)

const initApp = async () => {
  const multiplyBy10 = memoizedMultipleyBy10();
  console.log(multiplyBy10(10)); // calculates it
  console.log(multiplyBy10(10)); // accesses the cache via the key {10: 100}
  console.log(multiplyBy10(10)); // accesses the cache as above;
  console.log(multiplyBy10(5)); // calculates it
  console.log(multiplyBy10(5)); // accesses the cache via the key {5:50, 10: 100}
};
document.addEventListener("DOMContentLoaded", initApp);

const multiplyBy10 = (num) => {
  return num * 10;
};

const memoizedMultipleyBy10 = () => {
  const cache = {};

  //* anonymous function:
  //* This is a closure;
  return (num) => {
    //* if the number is found in the cache
    if (num in cache) {
      console.log(cache);
      return cache[num];
    }
    //* here we calculate if not in cache; To store it in the cache (=> memoize)
    const result = num * 10;
    cache[num] = result;
    return result;
  };
};
