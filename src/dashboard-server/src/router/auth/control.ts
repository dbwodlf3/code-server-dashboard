/** Return HTML Page relative paths of auth.
 */

import passport from "passport";
import { ControlFunction, ControlResult, Middleware, ViewFunction } from "lib/interface";
import { checkUser } from "lib/auth";
import { defaultErrorHandler } from "lib/error_handler";

export const login: Middleware = function(req, res, next) {
    
    const response_msg: ControlResult = {
        "fail": false,
        "msg": ""
    }

    const user_id = req.body['userName'];
    const user_pw = req.body['userPasswd'];

    passport.authenticate('local', (err, user, info)=>{        
        checkUser(user_id, user_pw)
        .then( (user)=>{
            // Here User serialzed
            req.login(user, (err)=>{
                if(err) {
                    response_msg.fail = true;
                    response_msg.msg = err;
                } else {
                    response_msg.msg = "succed to login"
                    res.redirect('/');
                    // return res.json(response_msg);
                }
            });
        })
        .catch( (err)=>{
            // Failed to login    
            if(err == false ) {
                response_msg.msg = 'Failed to Login. check tour id and password.'
            } else {
                defaultErrorHandler(err, response_msg);
            }
            res.json(response_msg);
        });
        
    })(req, res, next);
    
    return response_msg;
}

export const logout: ViewFunction = function(req, res) {
    req.logOut();
    res.redirect('/')
}