const consoleOutput = (message: string, colour: string) => {
    const colours = {
        red: '\x1b[31m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        blue: '\x1b[34m',
        white: '\x1b[37m',
        reset: '\x1b[0m'
    }
    console.log(colours[colour], message, colours.reset);
}
export default consoleOutput;