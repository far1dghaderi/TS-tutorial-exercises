import { Request, Response, NextFunction } from "express";
import { get, controller, use } from "./decorators";

function protect(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  } else {
    res.status(403).send("access denied");
  }
}

@controller("")
class RootController {
  @get("/")
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
                  <h4> you are logged in </h4>
                  <br />
                  <a href="/logout" > loggout</a>
          `);
    } else {
      res.send(`
              <h4> you are not logged in </h4>
              <br />
              <a href="/login">login </a>
          `);
    }
  }

  @get("/protected")
  @use(protect)
  getProtected(req: Request, res: Response) {
    res.send("welcome to protected");
  }
}
