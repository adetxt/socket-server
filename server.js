const app = require('express')()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const httpServer = require("http").Server(app)
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "https://adetxt-scaling-pancake-6w96gp5pxqx2xv6-3000.preview.app.github.dev",
    credentials: true
  },
});

io.on('connection', (socket) => {
   console.log('connected');

  socket.on("ping", (m) => {
    io.emit("pong", `Hello ${m?.name || 'Anonymous'}`);
  });
});

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})