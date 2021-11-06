"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = (0, express_1.Router)();
exports.router = router;
function protect(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    else {
        res.status(403).send("access denied");
    }
}
router.get("/login", function (req, res) {
    res.send("\n    \n    <form method=\"POST\" action=\"/login\">\n  \n          <div>\n              <label> username </label>\n              <input name=\"username\" />\n          </div>\n          <br />\n          <div>\n              <lsbel> password </label>\n              <input name=\"password\" type=\"password\" />\n          </div>\n          <br />        <br />\n          <input type=\"submit\" value=\"login\" />\n    </form>\n  \n    ");
});
router.post("/login", function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    if (username && password && username === "farid" && password == "123") {
        req.session = { loggedIn: true };
        return res.redirect("/");
    }
});
router.get("/", function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n        <h4> you are logged in </h4>\n        <br />\n        <a href=\"/logout\" > loggout</a>\n");
    }
    else {
        res.send("\n    <h4> you are not logged in </h4>\n    <br />\n    <a href=\"/login\">login </a>\n");
    }
});
router.get("/logout", function (req, res) {
    req.session = undefined;
    res.redirect("/");
});
router.get("/protected", protect, function (req, res) {
    res.send("welcome to protected");
});
