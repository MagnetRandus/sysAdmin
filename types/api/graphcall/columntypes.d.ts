export interface IColumn {
    name: string;
    type: keyof IColumnTypes;
}
export interface IColumnTypes {
    text?: any;
    number?: any;
}
export type CreateColumn<T extends keyof IColumnTypes> = IColumn & {
    [P in T]: any;
};
