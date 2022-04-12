const session = require("express-session");
const MemoryStore = require("memorystore")(session);
const bodyParser = require("body-parser");
const ejs = require("ejs");
const express = require("express")
//const passport = require("passport");

module.exports = function (app) {
    app.engine("html", ejs.renderFile);
    app.set("view engine", "html");
    app.use(express.json());
    //Ajustes para recibir formularios
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
      }));
 
    app.use(
        session({
          store: new MemoryStore({ checkPeriod: 86400000 }),
          secret: "#@%#&^$^$%@$^$&%#$%@#$%$^%&$%^#$%@#$%#E%#%@$FEErfgr3g#%GT%536c53cc6%5%tv%4y4hrgrggrgrgf4n",
          resave: false,
          saveUninitialized: false
        })
      );
    /*
    //// Usa el passaport para crear sesiones
    app.use(passport.initialize());
    app.use(passport.session());
    // El passaport al serializar users etc.
    passport.serializeUser(function(user, done) {
    done(null, user);
    });

    passport.deserializeUser(function(user, done) {
    done(null, user);
    });
*/
}