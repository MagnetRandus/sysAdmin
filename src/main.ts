import readFile from "./api/readfile.js";
import { sep } from "path";
import { EOL } from "os";
import { SysConfig } from "./interfaces/config.js";
import { makeGraphCallAsync } from "./api/graphcall.js";
import chalk from "chalk";
import createFile from "./api/createfile.js";
import { randusListInfo } from "./interfaces/lists.js";

const configPath = `${process.cwd()}${sep}config${sep}config.json`; //
const flSysConfig = JSON.parse(await readFile(configPath)) as SysConfig;

async function buildType(listsInfo: randusListInfo[]) {
  try {
    createFile(flSysConfig.interface_destination, `const list_names = ${JSON.stringify(listsInfo.map(h => h.name))} as const;${EOL}export type listNames = typeof list_names[number]`);
  } catch (err) {
    console.warn(err);
  }
}

async function Main(): Promise<void> {
  console.log(`CONFIGPATH: ${configPath}`);

  const listsInfo = await makeGraphCallAsync<randusListInfo>(flSysConfig);

  if (listsInfo instanceof Error) {
    console.log(chalk.red(listsInfo.message));
  } else {
    buildType(listsInfo.value);
  }
}

Main();
console.log(`DONE DONE`);
