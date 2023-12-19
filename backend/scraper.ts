import { SteamService } from "./steam_scraper";

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

export type SteamServicePythonGrpc = {
  [K in keyof SteamService]: (
    request: Parameters<SteamService[K]>[0],
    callback: (error: any, response: ReturnType<SteamService[K]>) => void,
  ) => ReturnType<SteamService[K]>;
};

export class GrpcPromiseFactory {
  private service: SteamServicePythonGrpc;

  constructor(service: SteamServicePythonGrpc) {
    this.service = service;
  }

  createPromisifiedMethod<K extends keyof SteamServicePythonGrpc>(
    methodName: K,
  ): (
    request: Parameters<SteamService[K]>[0],
  ) => Promise<UnwrapPromise<ReturnType<SteamService[K]>>> {
    return (request) => {
      return new Promise<UnwrapPromise<ReturnType<SteamService[K]>>>(
        (resolve, reject) => {
          this.service[methodName](
            request,
            (error: any, response: ReturnType<SteamService[K]>) => {
              if (error) {
                reject(error);
              } else {
                resolve(response as UnwrapPromise<ReturnType<SteamService[K]>>);
              }
            },
          );
        },
      );
    };
  }
}
