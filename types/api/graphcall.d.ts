import { Client } from "@microsoft/microsoft-graph-client";
import { sysProps } from "../interfaces/i-config.js";
export declare function getGraphClient(sysconfig: sysProps): Promise<Client>;
