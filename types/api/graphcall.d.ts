import { Client } from "@microsoft/microsoft-graph-client";
import { SysConfig } from "../interfaces/i-config.js";
import { randusGraphCall } from "../interfaces/i-graphcall.js";
export declare function getGraphClient(sysconfig: SysConfig): Promise<Client>;
export declare function makeGraphCallAsync<T>(sysconfig: SysConfig, client: Client): Promise<randusGraphCall<T> | Error>;
