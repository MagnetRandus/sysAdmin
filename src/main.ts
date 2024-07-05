import readFromFile from "./api/local/readfile.js";
import { sep } from "path";
import { sysProps } from "./interfaces/i-config.js";
import chalk from "chalk";
import { addorGetList } from "./api/procedures/ops-lists.js";
import { gcSiteInfo } from "./api/sp-ops/GetSite.js";
import { Say } from "./api/local/logger.js";
import testListName from "./interfaces/fields/testListName.js";
import createItem from "./api/sp-ops/item/Create.js";
import { readItems } from "./api/sp-ops/item/read.js";

const configPath = `${process.cwd()}${sep}config${sep}config.json`; //
const flSysConfig = JSON.parse(await readFromFile(configPath)) as sysProps;

const structTarget = `${process.cwd()}${sep}struct`;
// async function Main(): Promise<void> {
//   const siteInf = await gcSiteInfo();

//   if (siteInf instanceof Error) {
//     throw new Error(siteInf.message);
//   } else {
//     const { id: ListId } = await addorGetList(siteInf, "testListName");

//     try {
//       const spLists = JSON.parse(await readFromFile(`${structTarget}${sep}SPLists.json`)) as Array<SPList>;

//       spLists.forEach(async itm => {
//         const { Id: ListGuid } = itm;
//         const fieldsInfo = JSON.parse(await readFromFile(`${structTarget}${sep}${ListGuid}.json`)) as Array<SPField>;
//         fieldsInfo.forEach(field => {
//           Say.gI().Info("SPList", `${field.TypeAsString}-${field.StaticName}`);
//         });
//       });
//     } catch (err) {
//       if (err instanceof GraphError) {
//         console.log(`Error Name: ${err.code}`);
//         console.log(`Error Description: ${err.message}`);
//       }
//     }
//   }
// }

async function Main(): Promise<void> {
  const say = Say.gI();
  const siteInf = await gcSiteInfo();

  const listName = `testListName`;

  if (siteInf instanceof Error) {
    throw new Error(siteInf.message);
  } else {
    const lstInf = await addorGetList(siteInf, listName);

    const rCreateItm = await createItem<testListName>(siteInf, lstInf, {
      Title: "NEXT TEST",
      firstColumn: "abc",
      SecondColumn: "abc",
      ThirdColumn: 1,
    });

    if (rCreateItm instanceof Error) {
      say.Error("createItem", rCreateItm);
    } else {
      say.Info("Create Item", `ID:${rCreateItm.id}`);
    }

    const rReadItems = await readItems<testListName>(siteInf, lstInf);
    if (rReadItems instanceof Error) {
      say.Error("rReadItems", rReadItems);
    } else {
      say.Info("Read Items", JSON.stringify(rReadItems));

      rReadItems.value[0];
    }
  }
}

try {
  Say.gI().Info("main.js", "START");
  Main();
} catch (err) {
  if (err instanceof Error) console.log(chalk.red(`Bad bad: ${chalk.yellow(err.message)}`));
}
