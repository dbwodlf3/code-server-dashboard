module.exports = {
    apps : [{
        name: "code-web-app",
        script: "/app/src/server/src/index.js",
        env: {
            NODE_ENV: "production",
            NODE_PATH: "/app/src/server/src:/app/src/server/node_modules"
        }
    }]
}