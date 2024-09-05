// Using iteration
export function fibonacci(n, fib = [0, 1]) {
  //   const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

// console.log(fibonacci(8));

// recursively.

function fibonacciRecursao(n, fib = [0, 1]) {
  if (fib.length == n ) {
    return fib;
  }
  const proxValor = fib[fib.length - 1] + fib[fib.length - 2];
  fib.push(proxValor);
    return fibonacciRecursao(n,fib);
}
// console.log(fibonacciRecursao(8));
