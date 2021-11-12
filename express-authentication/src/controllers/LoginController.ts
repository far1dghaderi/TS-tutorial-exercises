import { Response, Request, NextFunction } from "express";
import { get, controller, use, post, bodyValidator } from "./decorators";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method="POST">
        <div>
            <label>Email</label>
            <input name="email" />
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password" />
        </div>
        <button> Submit </button>
    </form>
    `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { username, password } = req.body;

    if (username === "farid" && password === "123") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else [res.send("invalid username or password")];
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = undefined;

    res.redirect("/");
  }
}
