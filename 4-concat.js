const processArgv = process.argv;
let count = 0;

for (let i of processArgv) {
  count++;
}

if (count == 2) {
  console.log("undefined is undefined");
} else if (count == 3) {
    console.log(`${processArgv[2]} is undefined`)
}else{
  console.log(processArgv.slice(2, 4).join(" is "));
}
