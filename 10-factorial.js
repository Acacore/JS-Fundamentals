const num = parseInt(process.argv[2]);


if (!isNaN(num)) {
  console.log(factorial(num));
}else {
  console.log(1);
}


function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
