import { Items } from "../../../interfaces/i-graph.js";
import { IBaseField, Item } from "../../../interfaces/i-item.js";
import { IList } from "../../../interfaces/i-lists.js";
import { ISite } from "../../../interfaces/i-site.js";
import Config from "../../getConfig.js";

export async function readItem<K extends Partial<IBaseField>>(siteInf: ISite, lstInf: IList, ItemId: number): Promise<Item<K> | Error> {
  try {
    const cfg = await Config.getInstance();
    const createItemEndpoint = `/sites/${siteInf.id}/lists/${lstInf.id}/items/${ItemId}`;
    const response = await cfg.client.api(createItemEndpoint).get();
    return response;
  } catch (err) {
    if (err instanceof Error) return err;
  }
  return new Error(`Error is not of type Error in sp-ops/item/read`);
}

type ExpandOptions<T> = T extends "fields" ? "fields($select=Id)" : never;

/**
 * type FruitOptions<T> = 
T extends "appleTree" 
    ? "apple" | "greenApple" 
        : T extends "orangeTree" 
    ? "orange" | "mandarin" 
        : T extends "cherryTree" 
    ? "cherry" | "blackCherry" 
        : never;
 */

export async function readItems<K extends Partial<IBaseField>>(siteInf: ISite, lstInf: IList, expand: ExpandOptions<K>[] = []): Promise<Items<K> | Error> {
  try {
    const cfg = await Config.getInstance();
    const createItemEndpoint = `/sites/${siteInf.id}/lists/${lstInf.id}/items/`;
    const response = await cfg.client.api(createItemEndpoint).expand(`fields($select=Id,firstColumn,SecondColumn,ThirdColumn)`).get();
    return response;
  } catch (err) {
    if (err instanceof Error) return err;
  }
  return new Error(`Error is not of type Error in sp-ops/item/read`);
}
