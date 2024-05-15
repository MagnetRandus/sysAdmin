import { Client } from "@microsoft/microsoft-graph-client";
import { ILists } from "../../interfaces/lists.js";
/**
 *
 * @param clientInitd
 * @param displayName
 * @param columns [
        {
          name: 'Author',
          text: { }
        },
        {
          name: 'PageCount',
          number: { }
        }
      ]
      More info here:
      https://learn.microsoft.com/en-us/graph/api/resources/columndefinition?view=graph-rest-1.0
 */
export declare function newListCreate(clientInitd: Client, siteId: string, displayName: string): Promise<ILists>;
