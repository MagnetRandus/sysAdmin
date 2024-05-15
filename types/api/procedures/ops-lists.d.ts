import { Client } from "@microsoft/microsoft-graph-client";
import { ISite } from "../../interfaces/i-site.js";
import { IList } from "../../interfaces/i-lists.js";
export declare function addorGetList(siteInf: ISite, client: Client, listName: string): Promise<IList>;
