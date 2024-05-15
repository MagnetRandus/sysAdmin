import * as fs from "fs";

function fileHasEntry(gitignorePath = "./.gitignore", entryToCheck = "/config/config.json", doThis: () => void) {
  fs.readFile(gitignorePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading ${gitignorePath}: ${err}`);
      return;
    }

    // Check if the entry already exists in the .gitignore file
    const isEntryExists = data.includes(entryToCheck);

    if (!isEntryExists) {
      doThis();
    } else {
      console.log(`Not re-adding to .gitignore`);
    }
  });
}

function appendToGitIgnore(line: string, filePath = ".gitignore"): void {
  try {
    fileHasEntry(filePath, line, function () {
      // Read the existing content of the file
      const existingContent = fs.readFileSync(filePath, "utf-8");

      // Append the new line to the content
      const newContent = existingContent + "\n" + line;

      // Write the updated content back to the file
      fs.writeFileSync(filePath, newContent, "utf-8");
    });
  } catch (error) {
    console.error(`error`);
  }
}

export default appendToGitIgnore;
