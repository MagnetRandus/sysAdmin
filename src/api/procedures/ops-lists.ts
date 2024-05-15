import { Client } from "@microsoft/microsoft-graph-client";
import { ISite } from "../../interfaces/i-site.js";
import { addList, getList } from "../graphcall/sp-ops.js";
import chalk from "chalk";
import { IList } from "../../interfaces/i-lists.js";

export async function addorGetList(siteInf: ISite, client: Client, listName: string): Promise<IList> {
  return new Promise<IList>(async (resolve, reject) => {
    getList(siteInf.id, client, listName)
      .then(lstInf => {
        resolve(lstInf);
      })
      .catch((errNoList: Error) => {
        console.log(chalk.red(`Non-fatal-error list says: ${chalk.yellow(errNoList.message)}`));
        try {
          resolve(addList(siteInf.id, client, listName));
        } catch (err) {
          reject(err);
        }
      });
  });
}
