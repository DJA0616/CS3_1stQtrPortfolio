process.stdin.on('data', input => {
    const NUM = Number(input.toString().trim());
    
    if(NUM % 2 == 1){
        console.log('Weird');
    } else if(NUM >= 2 && NUM <= 5){
        console.log('Not Weird');
    } else if(NUM >= 6 && NUM <= 20){
        console.log('Weird');
    } else {
        console.log('Not Weird');
    }
    
    process.exit();
})