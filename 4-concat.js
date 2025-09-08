const processArgv = process.argv;
let count = 0;

for (let i of processArgv) {
  count++;
}

if (count === 2) {
  console.log("No argument");
} else {
  console.log(processArgv.slice(2, 4).join(" is "));
}
