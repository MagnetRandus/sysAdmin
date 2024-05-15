import { Client } from "@microsoft/microsoft-graph-client";
import { ISite } from "../../interfaces/site.js";
import { IList } from "../../interfaces/lists.js";
export declare function addorGetList(siteInf: ISite, client: Client, listName: string): Promise<IList>;
