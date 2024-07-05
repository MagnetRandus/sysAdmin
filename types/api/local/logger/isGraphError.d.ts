import { GraphError } from "@microsoft/microsoft-graph-client";
interface CustomGraphErrorBody {
    code: string;
    message: string;
    innerError: InnerError;
}
interface InnerError {
    date: string;
    "request-id": string;
    "client-request-id": string;
}
export declare function isGraphError(error: Error): error is GraphError;
export declare function parseGraphErrorBody(graphError: GraphError): CustomGraphErrorBody;
export {};
