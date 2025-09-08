const num1 = parseInt(process.argv[2])
const num2 = parseInt(process.argv[3])


if (!isNaN(num1) && !isNaN(num2)){
    console.log(claualateSum(num1, num2))
} else {
        console.log("NaN")
}
function claualateSum(a, b) {
    return a + b
}