const value = process.argv[2]
let num = parseInt(value)

if (!isNaN(num) && num > 0){
    for (let i = 0; i < num; i++){
        console.log('C is fun')
    }
} else {
        console.log("Missing number of occurrences")
    }