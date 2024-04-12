import fs from "fs";

const createFile = (filename: string, content: string) => {
  fs.writeFile(filename, content, err => {
    if (err) {
      console.error("Error creating file:", err);
    } else {
      console.log("File created successfully!");
    }
  });
};

export default createFile;
