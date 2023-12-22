const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      //訪問授權資料
      scope: ["profile", "email"],

      //動態生成callbackURL
      // callbackURL: `http://${req.get(
      //   "host"
      // )}${currentPath}/auth/google/callback`,
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    //kill cookies
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
