import { createServer } from "vless-js";

createServer({
  wsPath: "/ws",
  uuid: process.env.UUID
}).listen(3000)
