const processArgv = process.argv

const lastIndex = Object.keys(processArgv).at(-1);
let count = Number(lastIndex) + 1
if (count === 2) {
    console.log("No argument")
} else {
    console.log(processArgv.slice(2).join(" "))
        
}