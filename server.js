// gma - 7
// abs-cbn - 2
// ibc - 13
// gtv - 4
// tv5 - 5

const rl = require('readline')
const rli = rl.createInterface({
    input: process.stdin, 
    output: process.stdout, 
    prompt: 'Enter channel number: ', 
    historySize: 2, 
    removeHistoryDuplicates: true,})
rli.prompt();
rli.on('line', give_channel_name)

function give_channel_name(num){
    switch(num.trim()){
        case '2':
            console.log('ABS-CBN');
            break;
        case '4':
            console.log('GTV');
            break;
        case '5':
            console.log('TV5');
            break;
        case '7':
            console.log('GMA');
            break;
        case '13':
            console.log('IBC');
            break;
        default:
            console.log('Unknown channel');
    }

    rli.prompt()
}
