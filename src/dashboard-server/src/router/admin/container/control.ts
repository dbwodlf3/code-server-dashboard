/** Return HTML Page relative paths of auth.
 */

import { ControlFunction, ControlResult} from "lib/interface";
import { checkUser, generatePassword } from "lib/auth";
import { defaultErrorHandler } from "lib/error_handler";
import db from "lib/db";

import * as exec from 'child_process';
import { createCodeServerContainer } from "script/add_workspace";

export const createContainer: ControlFunction = function(req, res) {
    
    const response_msg: ControlResult = {
        "fail": false,
        "msg": ""
    }
    const userId = req.user!.id;
    const name = req.body['name'];    
    const passwd = req.body['passwd'];
    const publishedPort = req.body['port'];

    let query = `INSERT INTO Workspace (userId, name, password, publishedPort)
                    VALUES(1,
                            ${db.escape(name)},
                            ${db.escape(generatePassword(passwd))},
                            ${publishedPort}
                            )`;

    db.query(query).then((result)=>{
        const insertedId = result['insertId'];
        createCodeServerContainer(insertedId, userId, name, passwd, publishedPort);
    })
    .catch((err)=>{
        console.log(err);
    });

    res.redirect('/admin/user/dashboard');
    
    return response_msg;
}

export const getContainers: ControlFunction = function(req, res) {    
    const response_msg: ControlResult = {
        "fail": false,
        "msg": ""
    }
    
    let query = `SELECT * FROM Workspace`;

    db.query(query).then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
    });
    
    return response_msg;
}


// Helper
