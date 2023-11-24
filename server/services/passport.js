const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const { googleClientID, googleClientSecret } = require("../config/key");
const User = mongoose.model("User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new googleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id }).exec();
      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
