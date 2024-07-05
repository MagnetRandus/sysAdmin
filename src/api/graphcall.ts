import { ConfidentialClientApplication, IConfidentialClientApplication, ClientCredentialRequest, LogLevel } from "@azure/msal-node";
import { Client } from "@microsoft/microsoft-graph-client";
import { sysProps } from "../interfaces/i-config.js";

import { randusGraphCall } from "../interfaces/i-graphcall.js";
import { ISite } from "../interfaces/i-site.js";

export async function getGraphClient(sysconfig: sysProps): Promise<Client> {
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

  return Client.init({
    authProvider: done => {
      done(null, response!.accessToken);
    },
  });
}
