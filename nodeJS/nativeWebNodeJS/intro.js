"use strict";
// Introduction:
/* 
Node.js 2009 by Brian Dahl -> v8-Compiler + libraries
*/
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>Hello World!</h1>");
  res.write(`<p>Verb: ${req.method}, Pfad: ${req.url}</p>`);
  res.end(); // wichtig: res.end() nach res.write()
});

console.log("Hola mundo!");

server.listen(3_000);

// wenn node-server gestartet (node app.js)
// $ CURL Befehle
// => curl http://localhost:3000          => Verb: GET
// => curl -X POST http://localhost:3000  => Verb: POST
// => curl -i http://localhost:3000 //    => zeigt headers
// => curl -X POST -H 'content-type:application/json' -d '{"description":"Improved Error handeling"}' http://localhost:3000/note-todo

// $ PACKAGES used:
// - processenv => Auslesen/Konvertieren von Umgebungsvariablen
// - flaschenpost => logger

// $ CORS (Cross Origin Resource Sharing)
// => Von wo lässt man den Zugriff auf die API zu?
// $ Body-Parser (nur für express < 4.16 )
// => API gibt JSON zurück (hierfür parse notwendig)

/* 
if you are using Express 4.16+ you don't have to import body-parser anymore. You can do it just like this:
*/

// & app.use(express.urlencoded({extended: true}));
// & app.use(express.json())
// => To parse the incoming requests with JSON payloads

// $ TYPESCRIPT
// To add Typescript
// => npm install typescript
// => create tsconfig.json
// => rename files to ts
// => compiler in package.json (entweder tsc oder ts-node (compiled automatisch; gut im Entwicklermodus))
