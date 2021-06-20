import crypto from 'crypto'
import common from './common';
import db from './db'
import { User } from './interface'

export function generatePassword(userPw: string) {
    return crypto.createHmac('sha256', common.shaKey)
            .update(userPw)
            .digest('hex');
}

export function checkUser(userName: string, userPw: string): Promise<User> {
    return new Promise( (resolve, reject)=>{ 
        /**
         * @todo Temp Query. It has been to writen new.
        */
       const user_password = generatePassword(userPw)
       const query = `SELECT * FROM User WHERE userName=? AND password=?`
                                
        db.query(query, [userName, user_password])
            .then( (row)=>{
                return row[0];
            })
            .then( (user: User)=>{
                // Not Exist User.
                if(!user) return reject(false);
                
                if( generatePassword(userPw) == user.password) {
                    return resolve(user);
                }
                else {
                    // Wrong Password
                    return reject(false);
                }
            })
            .catch( (err)=>{
                return reject(err);
            })
    });
}