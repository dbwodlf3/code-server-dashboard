import * as exec from 'child_process';
import * as fs from 'fs';
import common from 'lib/common';
import * as path from 'path'

// get userId, containerName, password
function createCodeServer(userId: number, containerName: string, password: string, publishedPort: number){

// EXMAPELS
// docker service create --name code-user1 -d --publish published=2454,target=8080 docker_cs
let command = `docker service create --name ${containerName} -d docker_cs --publish published=${publishedPort},target=8080`

    // add service
    exec.exec(command, (err, stdout, stderr)=>{
        // get id
        let command = `docker service ls -f name=${containerName} | grep -w ${containerName} | awk '{print $1; exit}'`
        exec.exec(command, (err, stdout, stderr)=>{
            const id = stdout;

            console.log(id);
        })
    })

}

export function createCodeServerContainer(insertedId: number, userId: number, containerName: string, password: string, publishedPort: number){
    // EXMAPELS
    // docker service create --name code-user1 -d --publish published=2454,target=8080 docker_cs
    
    let command = `docker run --name ${containerName} -p ${publishedPort}:8080 -d docker_cs`

    // add service
    exec.exec(command, (err, stdout, stderr)=>{
        // get id
        let command = `docker ps -f name=${containerName} | grep -w ${containerName} | awk '{print $1; exit}'`
        exec.exec(command, (err, stdout, stderr)=>{
            const id = stdout;
            console.log(err);
            console.log(stdout);
            console.log(stderr);

            console.log(id);
        })

    })

    exec.exec(command, (err, stdout, stderr)=>{
        // make nginx proxy file.
        const confgiure_file = `
            location /code-server/${insertedId}/ {
                # http://localhost:8082
                proxy_pass http://localhost:${publishedPort}; 
                proxy_set_header Host $host;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection upgrade;
                proxy_set_header Accept-Encoding gzip;
            }
        `

        // fs.writeFile(`code-server.${publishedPort}.conf`, confgiure_file, (err)=>{
        //     if(err) {
        //         console.log(err);
        //     }
        // })
        // Temporary...
        const file_name = `code-server.${publishedPort}.conf`
        let full_path = path.join(common.locationDir, file_name)

        if ((process.env['NODE_ENV'] == 'production')) {
            full_path = path.join('/etc/nginx/sites-available/location', file_name);
        }

        fs.writeFile(full_path, confgiure_file, (err)=>{
            console.log('it works?');
            if(err) {
                console.log(err);
            }
        })
    })
}

// get expose url -> update expose url. and access.