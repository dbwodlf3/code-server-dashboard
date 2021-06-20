/** Entrypoint of Dashboard Server.
*/
import * as path from 'path'

import express from 'express'
import morgan from 'morgan'
import session from 'express-session'
import passport from 'passport'
import LocalStrategy from 'passport-local'
import * as njk from 'nunjucks'

import * as auth from 'lib/auth'
import { User } from 'lib/interface'

// === Express App Init -----------------------------------------------------===
const app = express();

import livereload from 'livereload'
import livereloadMiddleware from 'connect-livereload'
import common from 'lib/common'

/** livereload */
if(true) {
    const liverServer = livereload.createServer({
        exts: ['html', 'css', 'njk', 'js'],
        debug: true
    });

    liverServer.watch(common.staticDir)
    app.use(livereloadMiddleware())
}

/** Logs */
app.use(morgan(':method :url :status :res[content-length] - :response-time ms', {
}));

/** template engine */
const njk_env = njk.configure(path.join(common.projectDir, 'static', 'template'), {
    "autoescape": true,
    "watch": true,
    "express": app
})
njk_env.addGlobal('static', "/static");

console.log('template folder is here.', path.join(common.projectDir, 'static', 'template'));

/** Session */
app.use(session({
    secret: 'flying cat'
}));

/** Passport */
app.use(passport.initialize());
app.use(passport.session());

const passport_options: LocalStrategy.IStrategyOptions = {
    usernameField: 'userId',
    passwordField: 'userPw',
    session: true
}

const local_strategy = new LocalStrategy.Strategy(passport_options,
    (userId, userPw, cb)=>{
    auth.checkUser(userId, userPw)
});

passport.use(local_strategy);

passport.serializeUser( (user: User, cb)=>{
    cb(null, user);
});

passport.deserializeUser( (user: User, cb)=>{
    cb(null, user);
});

/** Static Files*/
app.use('/static/css', express.static(path.join(common.projectDir, 'static', 'css')));
app.use('/static/js', express.static(path.join(common.projectDir, 'static', 'js')));
app.use('/static/assets', express.static(path.join(common.projectDir, 'static', 'assets')));

/** Routers */
import entryRouter from './router/router'
app.use(entryRouter);

const port = 80;
app.listen(port, ()=>{
    console.log(`Dashboard Server is listening at ${port} port.`)
})