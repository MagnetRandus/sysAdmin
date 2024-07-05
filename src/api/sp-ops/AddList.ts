import { Client } from "@microsoft/microsoft-graph-client";
import chalk from "chalk";
import { IList } from "../../interfaces/i-lists.js";
import Config from "../getConfig.js";

async function addList(siteId: string, displayName: string): Promise<IList> {
  const cfg = Config.getInstance();
  const q = (await cfg).client.api(`/sites/${siteId}/lists`).post({
    displayName: displayName,
    list: {
      template: "genericList",
    },
  });
  console.log(chalk.green(`Created list: ${(await q).webUrl}`));
  return q;
}

export default addList;
