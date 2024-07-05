import { IBaseField } from "./i-item.js";

export interface Items<Fields extends Partial<IBaseField>> {
  "@odata.context": string;
  value: Fields[];
}
