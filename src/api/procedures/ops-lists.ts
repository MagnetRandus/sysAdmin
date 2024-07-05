import { ISite } from "../../interfaces/i-site.js";
import { IList } from "../../interfaces/i-lists.js";
import addList from "../sp-ops/AddList.js";
import { getList } from "../sp-ops/GetList.js";

export async function addorGetList(siteInf: ISite, listName: string): Promise<IList> {
  try {
    return await getList(siteInf.id, listName);
  } catch (error) {
    return await addList(siteInf.id, listName);
  }
}
