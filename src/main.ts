import readFile from "./api/readfile.js";
import { sep } from "path";
import { SysConfig } from "./interfaces/config.js";
import { getGraphClient, makeGraphCallAsync } from "./api/graphcall.js";
import chalk from "chalk";
import { randusGraphCall } from "./interfaces/graphcall.js";
import { ILists } from "./interfaces/lists.js";
import { ISite } from "./interfaces/site.js";
import { newListCreate } from "./api/graphcall/new-list-create.js";

const configPath = `${process.cwd()}${sep}config${sep}config.json`; //
const flSysConfig = JSON.parse(await readFile(configPath)) as SysConfig;

async function Main(): Promise<void> {
  console.log(`CONFIGPATH: ${configPath}`);

  const client = await getGraphClient(flSysConfig);

  const siteInf = (await client.api(`/sites/${flSysConfig.spdomain}:/sites/${flSysConfig.subsite}`).get()) as ISite;

  if (siteInf instanceof Error) {
    console.log(chalk.red(siteInf.message));
  } else {
    const lstCreate = await newListCreate(client, siteInf.id, "myABCList", [
      { name: "ACOL", text: {} },
      { name: "BCOL", text: {} },
    ]);
    // const x = (await client.api(`/sites/${siteInf.id}/lists`).get()) as randusGraphCall<ILists>;

    if (lstCreate instanceof Error) {
      console.log(chalk.red(lstCreate.message));
    } else {
      console.log(`\n\n\n\n\n${JSON.stringify(lstCreate)}\n\n\n\n\n\n`);
      // colCreate.value.forEach((v, i) => {
      //   console.log(`LIst Name: [${v.name}] ${v.displayName}`);
      // });
    }
  }
}

Main();
console.log(`DONE DONE!`);
