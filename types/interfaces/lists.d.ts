export interface randusListInfo {
    "@odata.etag": string;
    createdDateTime: string;
    description: string;
    eTag: string;
    id: string;
    lastModifiedDateTime: string;
    name: string;
    webUrl: string;
    displayName: string;
    createdBy: CreatedBy;
    parentReference: ParentReference;
    list: List;
    lastModifiedBy?: LastModifiedBy;
}
interface LastModifiedBy {
    user: User;
}
interface List {
    contentTypesEnabled: boolean;
    hidden: boolean;
    template: string;
}
interface ParentReference {
    siteId: string;
}
interface CreatedBy {
    user: User;
}
interface User {
    email?: string;
    id?: string;
    displayName?: string;
}
export {};
