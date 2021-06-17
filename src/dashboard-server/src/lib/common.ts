/** Common Values and Common Functions for Server.
 */

 import path from 'path';

 const projectDir = (()=>{
     return path.join(__dirname, "..", "..", "..")
 })();
 
 const staticDir = path.join(projectDir, "static")
 
 export default { 
     projectDir: projectDir,
     staticDir: staticDir
 }