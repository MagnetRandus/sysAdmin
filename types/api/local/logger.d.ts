import { GraphError } from "@microsoft/microsoft-graph-client";
import winston from "winston";
export declare class Say {
    private logFileName;
    LogFormat: winston.Logform.Format;
    private static instance;
    private logDir;
    private constructor();
    static gI(logDir?: string): Say;
    private SetLogOpts;
    Info(Label: string, message: string): void;
    Verbose(Label: string, message: string): void;
    Error(Label: string, errObject: Error): void;
    Error(Label: string, errObject: GraphError): void;
    Error(Label: string, message: string, StatusCode?: string): void;
}
