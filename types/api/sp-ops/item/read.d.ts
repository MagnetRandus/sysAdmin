import { Items } from "../../../interfaces/i-graph.js";
import { IBaseField, Item } from "../../../interfaces/i-item.js";
import { IList } from "../../../interfaces/i-lists.js";
import { ISite } from "../../../interfaces/i-site.js";
export declare function readItem<K extends Partial<IBaseField>>(siteInf: ISite, lstInf: IList, ItemId: number): Promise<Item<K> | Error>;
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
export declare function readItems<K extends Partial<IBaseField>>(siteInf: ISite, lstInf: IList, expand?: ExpandOptions<K>[]): Promise<Items<K> | Error>;
export {};
