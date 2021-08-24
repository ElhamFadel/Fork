const server = require("./app");
server.listen(server.get("port"), () => {
    console.log(`http//:localhost:5000`);
})