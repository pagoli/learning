//$ MEMOIZATION (Dave Gray)

const initApp = async () => {
  const memoizedAdd3 = memoize(add3);
  console.log(memoizedAdd3(10, 1, 2)); // calculates it
  console.log(memoizedAdd3(10, 1, 2)); // accesses the cache via the key {10,1,2: 13}
  console.log(memoizedAdd3(10, 1, 2)); // accesses the cache as above;
  console.log(memoizedAdd3(5, 4, 3)); // calculates it
  console.log(memoizedAdd3(5, 4, 3)); // accesses the cache via the key {10,1,2: 13, 5,4,3: 12}

  const memoizedAddMany = memoize(addMany);
  console.log(memoizedAddMany(1, 2, 3, 4, 5)); // calculates it
  console.log(memoizedAddMany(1, 2, 3, 4, 5)); // accesses the cache via the key {1,2,3,4,5: 15}
  console.log(memoizedAddMany(1, 2, 3, 4, 5)); // accesses the cache as above;
  console.log(memoizedAddMany(6, 7, 8, 9, 10)); // calculates it
  console.log(memoizedAddMany(6, 7, 8, 9, 10)); // accesses the cache via the key {1,2,3,4,5: 15, 6,7,8,9,10:40}

  const memoizedFib = memoize(fib);
  console.log(memoizedFib(40)); // calculates it
  console.log(memoizedFib(40)); // accesses the cache via the key {40: 102334155}
  console.log(memoizedFib(40)); // accesses the cache as above;
};
document.addEventListener("DOMContentLoaded", initApp);

const multiplyBy10 = (num) => {
  return num * 10;
};

const add3 = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

const addMany = (...args) => {
  return args.reduce((acc, num) => acc + num);
};

const fib = (pos) => {
  if (pos <= 2) return pos;
  return fib(pos - 1) + fib(pos + 1) + fib(pos - 2);
};

const memoize = (fn) => {
  const cache = {};

  //* by returning the anonymous function, we create a closure:
  //* so the cache is available to the following function via the lexical/static scope;
  return (...args) => {
    if (args.toString() in cache) {
      // if (JSON.stringify(args) in cache) {; also possible
      // keys are stored as strings
      console.log(cache);
      return cache[args.toString()]; // return cache[JSON.stringify(args)];
    }
    const result = fn(...args);
    cache[args.toString()] = result; //  cache[JSON.stringify(args)] = result;
    return result;
  };
};

// const memoizedMultipleyBy10 = () => {
//   const cache = {};

//   //* anonymous function:
//   //* This is a closure;
//   return (num) => {
//     //* if the number is found in the cache
//     if (num in cache) {
//       console.log(cache);
//       return cache[num];
//     }
//     //* here we calculate if not in cache; To store it in the cache (=> memoize)
//     const result = num * 10;
//     cache[num] = result;
//     return result;
//   };
// };
