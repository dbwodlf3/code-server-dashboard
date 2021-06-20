/** Return HTML Page relative paths of auth.
 */

import { ControlFunction, ControlResult} from "lib/interface";
import { checkUser, generatePassword } from "lib/auth";
import { defaultErrorHandler } from "lib/error_handler";
import db from "lib/db";

import * as exec from 'child_process';

export const createContainer: ControlFunction = function(req, res) {
    
    const response_msg: ControlResult = {
        "fail": false,
        "msg": ""
    }
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
        
        /** Create Code Server and Update. */
        let command = `docker service create --name ${name} --publish published=${publishedPort},target=8080 -d docker_cs`
        exec.exec(command, (err, stdout, stderr)=>{

            // get id
            let command = `docker service ls -f name=${name} | grep -w ${name} | awk '{print $1; exit}'`
            exec.exec(command, (err, stdout, stderr)=>{
                const serviceId = stdout;

                let query = `UPDATE SET serviceId=${serviceId} WHERE id=${insertedId}`;
                db.query(query);
            })
        })

    })
    .catch((err)=>{
        console.log(err);
    });

    res.redirect('/admin/user/dashboard');
    
    return response_msg;
}

// Helper
