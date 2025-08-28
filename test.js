require('readline').createInterface({input: process.stdin,}).on('line', execute)

function execute(input){
    if(parseInt(input)){
        console.log(parseInt(input) + 1 + `ay${12 + 3}`)
    }
}