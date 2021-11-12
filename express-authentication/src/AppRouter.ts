import e from "express";
import express from "express";

export class AppRouter {
  private static instance: express.Router;

  static get router(): express.Router {
    if (!this.instance) {
      this.instance = express.Router();
    }

    return this.instance;
  }
}
