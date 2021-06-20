import { Middleware } from 'lib/interface';

/** If not logined, redirect to auth login page.
*/
export const checkLogin: Middleware = function(req, res, next){
    if(req.user && req.user.id){
        next();
    }
    else {
        res.redirect('/auth/login');
    }
}

/** If already logined, redirect.
*/
export const checkLoginTrue: Middleware = function(req, res, next){
    if(req.user && req.user.id){
        res.redirect('/');
    } else {
        next();
    }
}