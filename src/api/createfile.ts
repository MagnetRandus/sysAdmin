import chalk from "chalk";
import fs from "fs";
import path from "path";

const createFile = (dest: string, content: string) => {
  const dir = path.dirname(dest);
  const file = path.basename(dest);

  fs.mkdir(dir, { recursive: true }, err => {
    if (err) {
      console.log(chalk.red("Failed to create directories"), err);
      return;
    }

    fs.writeFile(dest, content, err => {
      if (err) {
        console.error(chalk.red("Error creating file:"), err);
      } else {
        console.log(chalk.green(`File ${file} created successfully at ${dir}`));
      }
    });
  });
};

export default createFile;
