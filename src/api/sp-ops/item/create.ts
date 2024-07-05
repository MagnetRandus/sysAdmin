import { IBaseField, Item } from "../../../interfaces/i-item.js";
import { IList } from "../../../interfaces/i-lists.js";
import { ISite } from "../../../interfaces/i-site.js";
import Config from "../../getConfig.js";

async function createItem<K extends Partial<IBaseField>>(siteInf: ISite, lstInf: IList, payload: K): Promise<Item<K> | Error> {
  try {
    const cfg = await Config.getInstance();
    const createItemEndpoint = `/sites/${siteInf.id}/lists/${lstInf.id}/items`;
    const newItem = await cfg.client.api(createItemEndpoint).post({ fields: payload });
    return newItem;
  } catch (err) {
    if (err instanceof Error) return err;
  }
  return new Error(`Error is not of type Error`);
}

export default createItem;
