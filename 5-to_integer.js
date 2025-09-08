const processArgv = process.argv;

function isNumber(value) {
    const num = parseInt(value)

    if (!isNaN(num)) {
        return(`My number: ${num}`)
    } else {
        return "Not a number"
    }
}

console.log(isNumber(processArgv.slice(2)))