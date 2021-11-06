import express from "express";
import { router } from "./routes/loginRoutes";
import cookieSession from "cookie-session";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["afsdsa"] }));

app.use(router);

app.listen(3000);
