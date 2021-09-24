const express = require("express");
// express server
const app = express();
//  nodejs
const server = require("http").Server(app);
// nodejs => socket enabled
const path = require("path");
const io = require("socket.io")(server);

// serve static assets to client
app.use(express.static("public"));

app.get('/', (req, res) => {
    //dir name ignored
    //   res.sendFile(__dirname + '/public/index.html');
    res.redirect("/index.html");
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log("listening on *:3000");
});