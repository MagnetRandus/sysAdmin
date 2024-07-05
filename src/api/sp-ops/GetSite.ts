import { ISite } from "../../interfaces/i-site.js";
import { randusGraphCall } from "../../interfaces/i-graphcall.js";
import Config from "../getConfig.js";
import chalk from "chalk";

export async function gcSiteInfo(): Promise<ISite | Error> {
  try {
    console.log(chalk.bgGreenBright("GETTING INSTANCE 1"));
    const cfg = Config.getInstance();
    const sysconfig = (await cfg).props;
    const client = (await cfg).client;

    const request = client.api(`/sites/${sysconfig.spdomain}:/sites/${sysconfig.subsite}`);

    return (await request.get()) as ISite;
  } catch (error) {
    if (error instanceof Error) {
      return error;
    } else {
      console.log(JSON.stringify(error));
      throw new TypeError(`Error thrown is not an instance of Error, so it can't be returned. Check the console for details.`);
    }
  }
}
