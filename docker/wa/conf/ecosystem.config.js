module.exports = {
    apps : [{
        name: "code-web-app",
        script: "/app/src/server/index.js",
        env: {
            NODE_ENV: "production",
            NODE_PATH: "/app/src/server/:/app/src/server/node_modules"
        }
    }]
}