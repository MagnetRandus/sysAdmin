import { Client } from "@microsoft/microsoft-graph-client";
import { IList } from "../../interfaces/i-lists.js";
import { IColLookup, IColNumber, IColText } from "../../interfaces/i-colomn.js";
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
export declare function addList(siteId: string, clientInitd: Client, displayName: string): Promise<IList>;
/**
 *
 * @param siteId
 * @param clientInitd
 * @param identifier {list-id} or {list-title}
 * @returns
 * #Ref:https://learn.microsoft.com/en-us/graph/api/list-get?view=graph-rest-1.0&tabs=http
 */
export declare function getList(siteId: string, clientInitd: Client, identifier: string): Promise<IList>;
/**
 * Column types and definitions are listed here:
 * https://learn.microsoft.com/en-us/graph/api/resources/columndefinition?view=graph-rest-1.0
 */
interface ColumnDefinition {
    description: string;
    enforceUniqueValues: boolean;
    hidden: boolean;
    indexed: boolean;
    name: string;
    text?: IColText;
    number?: IColNumber;
    lookup?: IColLookup;
    required?: boolean;
    isSealed?: boolean;
}
/**
 * Add column to a list
 * const opts = {
    description: 'test',
    enforceUniqueValues: false,
    hidden: false,
    indexed: false,
    name: 'Title',
    text: {
      allowMultipleLines: false,
      appendChangesToExistingText: false,
      linesForEditing: 0,
      maxLength: 255
    }
  };
 * @param siteId
 * @param clientInitd
 * @param opts:ColumnDefinition
 * @returns
 * #Ref: https://learn.microsoft.com/en-us/graph/api/list-post-columns?view=graph-rest-1.0&tabs=javascript
 */
export declare function addColumn(siteId: string, clientInitd: Client, listId: string, opts: ColumnDefinition): Promise<any>;
export {};
