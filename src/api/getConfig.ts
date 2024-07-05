import { Client } from "@microsoft/microsoft-graph-client";
import { sysProps } from "../interfaces/i-config.js";
import path, { sep } from "path";
import { ClientCredentialRequest, ConfidentialClientApplication, IConfidentialClientApplication, LogLevel } from "@azure/msal-node";
import { readFile } from "fs/promises";
import chalk from "chalk";

class Config {
  private static instance: Config;
  private _props?: sysProps;
  private _client?: Client;
  private constructor() {}
  get props() {
    if (this._props === undefined) {
      throw new Error("Config is not initialized");
    }
    return this._props;
  }

  get client() {
    if (this._client === undefined) {
      throw new Error("Client is not initialized");
    }
    return this._client;
  }
  public static async getInstance(): Promise<Config> {
    if (!Config.instance) {
      Config.instance = new Config();
      try {
        await Config.instance.init();
      } catch (err) {
        if (err instanceof Error) {
          console;
        }
        throw new Error("Could not get config");
      }
    }

    return Config.instance;
  }
  private async init() {
    try {
      // Load config
      const currentDir = process.cwd();
      const configFileContent = await readFile(`${currentDir}${sep}config${sep}config.json`, "utf8");
      this._props = JSON.parse(configFileContent);

      // Create client
      if (this._props !== undefined) {
        await this.graphclient(this._props);
      }
    } catch (error) {
      console.error("Error initializing GlobalConfig", error);
    }
  }
  private async graphclient(sysconfig: sysProps): Promise<void> {
    const cca: IConfidentialClientApplication = new ConfidentialClientApplication({
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
    });

    const clientCredentialRequest: ClientCredentialRequest = {
      scopes: ["https://graph.microsoft.com/.default"], // replace with your resource
    };

    const response = await cca.acquireTokenByClientCredential(clientCredentialRequest);

    console.log(chalk.greenBright(`Fetching token from SharePoint`));

    if (this._client === undefined) {
      this._client = Client.init({
        authProvider: done => {
          done(null, response!.accessToken);
        },
      });
    } else {
      console.log(chalk.bgCyanBright(`Not re-init client`));
    }
  }
}

export default Config;
