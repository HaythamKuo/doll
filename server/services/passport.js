const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;

const { googleClientID, googleClientSecret } = require("../config/key");

passport.use(
  new googleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(`accessToken:${accessToken}`);
      console.log(`refreshToken:${refreshToken}`);
      console.log("profile: " + JSON.stringify(profile, null, 2));
    }
  )
);
