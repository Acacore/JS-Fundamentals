const lengthOfProcessArgv = process.argv.length
if (lengthOfProcessArgv == 2) {
    console.log("No argument")
} else if (lengthOfProcessArgv == 3) {
    console.log("Argument found")
} else {
    console.log("Arguments found")
}