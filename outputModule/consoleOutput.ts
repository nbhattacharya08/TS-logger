import * as colors from 'colors';

const consoleOutput = (message: string, colour: string) => {
    if(colors[colour] !== undefined) {
        console.log(colors[colour](message));
    } else {
        console.log(message);
    }
}
export default consoleOutput;