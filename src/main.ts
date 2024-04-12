import readFile from "./api/readfile.js";
import { sep } from "path";
import { SysConfig } from "./types/config.js";
import { makeGraphCallAsync } from "./api/graphcall.js";
import createFolder from "./api/createfolder.js";
import chalk from "chalk";
import appendToGitIgnore from "./api/togitignore.js";
import createFile from "./api/createfile.js";

const configPath = `${process.cwd()}${sep}config${sep}config.json`; //

async function Main(): Promise<void> {
  console.log(`CONFIGPATH: ${configPath}`);
  const flSysConfig = JSON.parse(await readFile(configPath)) as SysConfig;
  makeGraphCallAsync(flSysConfig);

  try {
    createFolder(`./data`);
    createFolder(`./config`);
    createFolder(`./src/api`);
    createFolder(`./src/api/autotypes`);
    createFolder(`./src/api/autotypes/Lists`);

    console.log(chalk.yellowBright(`Excluding config/config.json using .gitignore`));
    appendToGitIgnore(`/config/config.json`);

    console.log(chalk.yellowBright(`Creating lists-info.json`));

    // createFile("./data/lists-info.json", JSON.stringify(JSON.parse(rInf).d.results));

    // const results = JSON.parse(await readFile("./data/lists-info.json")) as RootObject[];
    // console.log(chalk.bold.yellowBright(`Showing Listnames results:`));
    // results.map(m => {
    //   console.log(m.Title);
    // });
    // createFile("./src/api/autotypes/Lists/listnames.ts", `const list_names = ${JSON.stringify(results.map(x => x.Title))} as const;${os.EOL}export type listNames = typeof list_names[number]`);
    // console.dir(results.map(x => x.Title));
  } catch (err) {
    console.warn(err);
  }
}

Main();
console.log(`DONE DONE`);
