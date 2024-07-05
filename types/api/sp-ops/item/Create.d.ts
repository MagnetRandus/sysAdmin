import { IBaseField, Item } from "../../../interfaces/i-item.js";
import { IList } from "../../../interfaces/i-lists.js";
import { ISite } from "../../../interfaces/i-site.js";
declare function createItem<K extends Partial<IBaseField>>(siteInf: ISite, lstInf: IList, payload: K): Promise<Item<K> | Error>;
export default createItem;
