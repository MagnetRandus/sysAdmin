import fs from 'fs';

const readFile = (filename: string) => {
    return new Promise<string>((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                // console.log('File contents:', data);
                resolve(data);
            }
        });
    });
};

export default readFile;
