import { Router, Response, Request, NextFunction } from "express";

const router = Router();

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function protect(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  } else {
    res.status(403).send("access denied");
  }
}

router.get("/login", (req: Request, res: Response) => {
  res.send(`
    
    <form method="POST" action="/login">
  
          <div>
              <label> username </label>
              <input name="username" />
          </div>
          <br />
          <div>
              <lsbel> password </label>
              <input name="password" type="password" />
          </div>
          <br />        <br />
          <input type="submit" value="login" />
    </form>
  
    `);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { username, password } = req.body;

  if (username && password && username === "farid" && password == "123") {
    req.session = { loggedIn: true };
    return res.redirect("/");
  }
});

router.get("/", (req: Request, res: Response) => {
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
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;

  res.redirect("/");
});

router.get("/protected", protect, (req: Request, res: Response) => {
  res.send("welcome to protected");
});
export { router };
