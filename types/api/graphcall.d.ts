import { Client } from "@microsoft/microsoft-graph-client";
import { SysConfig } from "../interfaces/config.js";
import { randusGraphCall } from "../interfaces/graphcall.js";
export declare function getGraphClient(sysconfig: SysConfig): Promise<Client>;
export declare function makeGraphCallAsync<T>(sysconfig: SysConfig, client: Client): Promise<randusGraphCall<T> | Error>;
