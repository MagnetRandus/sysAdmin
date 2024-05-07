import { Client } from "@microsoft/microsoft-graph-client";
export interface IColumn {
    name: string;
}
export interface CreateTextColumn extends IColumn {
    text: any;
}
export interface CreateNumberColumn extends IColumn {
    number: any;
}
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
export declare function newListCreate(clientInitd: Client, siteId: string, displayName: string, columns: Array<CreateTextColumn | CreateNumberColumn>): Promise<any>;
