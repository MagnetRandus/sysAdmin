import { Client } from "@microsoft/microsoft-graph-client";
import { sysProps } from "../interfaces/i-config.js";
declare class Config {
    private static instance;
    private _props?;
    private _client?;
    private constructor();
    get props(): sysProps;
    get client(): Client;
    static getInstance(): Promise<Config>;
    private init;
    private graphclient;
}
export default Config;
