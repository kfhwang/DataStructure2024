var fabAll=[]
function Fab(n) {
    if (n <= 1) {
        return 1;
    }
    
    let a = 1; // Fib(0)
    let b = 1; // Fib(1)
    let fib = 1;

    for (let i = 2; i <= n; i++) {
        fib = a + b; // Calculate current Fibonacci number
        fabAll.push(fib);
        a = b;       // Move forward in the series
        b = fib;     // Update the previous Fibonacci number
    }

    return fib; // Return the n-th Fibonacci number
}
console.log(Fab(42))