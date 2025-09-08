const value = process.argv[2]
let num = parseInt(value)

if (!isNaN(num)){
    for (let i = 0; i < num; i++){
        console.log('X'.repeat(num))
    }
} else {
        console.log("Missing size")
    }