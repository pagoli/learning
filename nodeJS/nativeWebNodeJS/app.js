import { flaschenpost } from "flaschenpost";
import { getApi } from "./lib/getApi.js";
import http from "http";
// import { InMemoryStore } from "./lib/store/InMemoryStore.js";
import { MongoDbStore } from "./lib/store/MongoDbStore.js";

import { processenv } from "processenv";

// Wrappen der App in einer AIIFE (Async immediately invoked function expression) // => theoretisch auch neu: TOP LEVEL AWAIT möglich.
(async () => {
  const logger = flaschenpost.getLogger();

  // const store = new InMemoryStore(); // constructor wird in Bsp. genutzt, um Parameter zu setzen

  const store = new MongoDbStore({
    // user with restricted admin access
    hostname: "localhost",
    port: 27017,
    username: "myUserAdmin",
    password: "abc123",
    database: "todos",
  });

  //Verbindungsaufbau (Asynchron!)
  await store.initialize();

  // const server = http.createServer((req, res) => {
  //   res.writeHead(200, { "content-type": "text/html" });
  //   res.write("<h1>Hello World!</h1>");
  //   res.write(`<p>Verb: ${req.method}, Pfad: ${req.url}</p>`);
  //   res.end(); // wichtig: res.end() nach res.write()
  // });

  const api = getApi({ store });
  const server = http.createServer(api);

  const port = processenv("PORT", 3_000);

  server.listen(port, () => {
    logger.info("Server started.", { port });
  });
})();
