import { IBaseField, Item } from "../i-item.js";

interface ListFields_testListName extends Partial<IBaseField> {
  firstColumn: string;
  SecondColumn: string;
  ThirdColumn: number;
}

type testListName = ListFields_testListName;
export default testListName;
