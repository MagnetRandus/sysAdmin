import { Client } from "@microsoft/microsoft-graph-client";
import { ColumnDefinition } from "../../interfaces/i-columnDefinition.js";
declare function addColumn(siteId: string, clientInitd: Client, listId: string, opts: ColumnDefinition): Promise<any>;
export default addColumn;
