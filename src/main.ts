import readFile from "./api/readfile.js";
import { sep } from "path";
import { SysConfig } from "./interfaces/config.js";
import { makeGraphCallAsync } from "./api/graphcall.js";
import chalk from "chalk";

const configPath = `${process.cwd()}${sep}config${sep}config.json`; //
const flSysConfig = JSON.parse(await readFile(configPath)) as SysConfig;

async function Main(): Promise<void> {
  console.log(`CONFIGPATH: ${configPath}`);

  const listsInfo = await makeGraphCallAsync<any>(flSysConfig);

  if (listsInfo instanceof Error) {
    console.log(chalk.red(listsInfo.message));
  }
}

Main();
console.log(`DONE DONE!`);
