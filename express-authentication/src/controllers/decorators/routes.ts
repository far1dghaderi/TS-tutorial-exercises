import { RequestHandler } from "express";
import "reflect-metadata";
import { methods } from "../../Methods";
import { MetadataKeys } from "./MetadataKeys";

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: String) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routeBinder(methods.get);
export const post = routeBinder(methods.post);
export const patch = routeBinder(methods.patch);
export const put = routeBinder(methods.put);
export const del = routeBinder(methods.del);
