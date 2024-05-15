import readFile from "./api/local/readfile.js";
import { sep } from "path";
import { SysConfig } from "./interfaces/i-config.js";
import { getGraphClient } from "./api/graphcall.js";
import chalk from "chalk";
import { ISite } from "./interfaces/i-site.js";
import { addColumn, addList, getList } from "./api/graphcall/sp-ops.js";
import { addorGetList } from "./api/procedures/ops-lists.js";
import { GraphError } from "@microsoft/microsoft-graph-client";

const configPath = `${process.cwd()}${sep}config${sep}config.json`; //
const flSysConfig = JSON.parse(await readFile(configPath)) as SysConfig;

async function Main(): Promise<void> {
  const client = await getGraphClient(flSysConfig);
  const siteInf = (await client.api(`/sites/${flSysConfig.spdomain}:/sites/${flSysConfig.subsite}`).get()) as ISite;

  if (siteInf instanceof Error) {
    throw new Error(siteInf.message);
  } else {
    const { id: ListId } = await addorGetList(siteInf, client, "testListName");

    try {
      const colAdInf = await addColumn(siteInf.id, client, ListId, {
        name: "ThirdColumn",
        // text: {
        //   allowMultipleLines: false,
        //   appendChangesToExistingText: false,
        //   linesForEditing: 1,
        //   maxLength: 255,
        // },
        number: {
          decimalPlaces: "automatic",
          displayAs: "number",
        },
        description: "This is the first column",
        enforceUniqueValues: false,
        hidden: false,
        indexed: false,
      });
      console.log(JSON.stringify(colAdInf));
    } catch (err) {
      if (err instanceof GraphError) {
        console.log(`Error Name: ${err.code}`);
        console.log(`Error Description: ${err.message}`);
      }
    }
  }
}

try {
  Main();
} catch (err) {
  if (err instanceof Error) console.log(chalk.red(`Bad bad: ${chalk.yellow(err.message)}`));
}
