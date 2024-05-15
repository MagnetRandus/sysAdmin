import chalk from "chalk";
import * as fs from "fs";
import { promisify } from "util";
const stat = promisify(fs.stat);

// Create a folder
async function createFolder(folder_path: string) {
  try {
    await stat(folder_path);
    return true;
  } catch (err) {
    if (err instanceof Error && (err as any).code === "ENOENT") {
      //Doesn't exist:
      fs.mkdir(folder_path, err => {
        if (err) {
          console.error(`Error creating folder: ${err.message}`);
        } else {
          console.log(`Folder '${folder_path}' created successfully.`);
        }
      });
    } else {
      console.log(chalk.blueBright(`Not recreating folder: [${folder_path}]`));
    }
  }
}

export default createFolder;
