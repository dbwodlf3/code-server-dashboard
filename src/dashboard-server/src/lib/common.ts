/** Common Values and Common Functions for Server.
 */

 import path from 'path';

 const projectDir = (()=>{
     return path.join(__dirname, "..", "..", "..", "..")
 })();
 
 const staticDir = path.join(projectDir, "static")

 const shaKey = 'flying cat'
 
 export default { 
     projectDir: projectDir,
     staticDir: staticDir,
     shaKey: shaKey,
     dbHost: 'localhost',
     dbUser: 'root',
     dbPasswd: 'root',
     dbDatabase: 'code'
 }