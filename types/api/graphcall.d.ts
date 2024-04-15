import { SysConfig } from "../interfaces/config.js";
import { randusGraphCall } from "../interfaces/graphcall.js";
export declare function makeGraphCallAsync<T>(sysconfig: SysConfig): Promise<randusGraphCall<T> | Error>;
