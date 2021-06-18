import mariadb from 'mariadb';
import common from './common';

export const pool = mariadb.createPool({
    "host": common.dbHost,
    "user": common.dbUser,
    "password": common.dbPasswd,
    "database": common.dbDatabase,
    "port": 3333
});


/**
 * @todo SQL String Filtering.
*/
export function query(sql: string, parameters: any[] = []): Promise<any> {
    return new Promise( (resolve, reject)=>{
        pool.getConnection()
            .then( (conn)=>{
                conn.query(sql, parameters)
                    .then( (rows)=> {
                        conn.release();
                        return resolve(rows);
                    })
                    .catch( (err)=>{
                        // Query Error
                        conn.release();
                        return reject(err);
                    })
            })
            .catch( (err)=> {
                // Connection Error
                return reject(err);
            })
    });
}

export default { 
    "query": query, 
    "pool": pool,
    "escape": pool.escape
}