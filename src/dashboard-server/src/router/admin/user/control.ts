/** Return HTML Page relative paths of auth.
 */

import { ControlFunction, ControlResult } from "lib/interface";
import { generatePassword } from "lib/auth";
import db from "lib/db";

export const createUser: ControlFunction = function(req, res) {
    
    const response_msg: ControlResult = {
        "fail": false,
        "msg": ""
    }

    const username = req.body['userName'];    
    const user_email = req.body['userEmail'];
    const user_pw = req.body['userPasswd'];

    let query = `INSERT INTO User (username, userEmail, password, type, activation, phone)
                    VALUES(${db.escape(username)},
                        ${db.escape(user_email)},
                        ${db.escape(generatePassword(user_pw))},
                        '0',
                        '1',
                        '000-000-0000')`;

    db.query(query).catch((err)=>{
        console.log(err);
    });

    res.redirect('/admin/user/dashboard');
    
    return response_msg;
}