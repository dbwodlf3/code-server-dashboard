/** Entrypoint of Dashboard Server.
*/
import express from 'express'

// ===-----------------------------------------------------------------------===
// Express App Init
// ===-----------------------------------------------------------------------===
const app = express();

import livereload from 'livereload'
import livereloadMiddleware from 'connect-livereload'
import common from 'lib/common'

if(true) {

    const liverServer = livereload.createServer({
        exts: ['html', 'css', 'njk', 'js'],
        debug: true
    });

    liverServer.watch(common.staticDir);
    app.use(livereloadMiddleware());
}

app.listen(8080, ()=>{
    console.log(`Dashboard Server is listening at 8080 port.`)
})