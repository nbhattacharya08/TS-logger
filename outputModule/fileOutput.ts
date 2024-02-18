import * as fs from 'fs';

const fileOutput = (message: string, filePath: string) => {
    fs.appendFile(filePath, message + '\n', (err) => {
        if (err) {
            console.error('Failed to append to file:', err);
        } else {
            console.log('Successfully appended to file');
        }
    });
}
export default fileOutput;