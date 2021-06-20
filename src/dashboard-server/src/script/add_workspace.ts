import * as exec from 'child_process';

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

// get expose url -> update expose url. and access.