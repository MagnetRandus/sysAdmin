import { ConfidentialClientApplication, IConfidentialClientApplication, ClientCredentialRequest, LogLevel } from "@azure/msal-node";
import { Client } from "@microsoft/microsoft-graph-client";
import { SysConfig } from "../types/config.js";

export async function makeGraphCallAsync(sysconfig: SysConfig): Promise<void> {
  try {
    const config = {
      auth: { ...sysconfig.credentials },
      system: {
        loggerOptions: {
          loggerCallback(loglevel: LogLevel, message: string, containsPii: boolean) {
            console.log(message);
          },
          piiLoggingEnabled: false,
          logLevel: LogLevel.Info,
        },
      },
    };

    const cca: IConfidentialClientApplication = new ConfidentialClientApplication(config);

    const clientCredentialRequest: ClientCredentialRequest = {
      scopes: ["https://graph.microsoft.com/.default"], // replace with your resource
    };

    const response = await cca.acquireTokenByClientCredential(clientCredentialRequest);

    const client = Client.init({
      authProvider: done => {
        done(null, response!.accessToken);
      },
    });
    const site = await client.api(`/sites/${sysconfig.spdomain}:/sites/${sysconfig.subsite}`).get();
    const lists = await client.api(`/sites/${site.id}/lists`).get();
    console.dir(lists);
  } catch (error: any) {
    console.log(JSON.stringify(error));
  }
}
