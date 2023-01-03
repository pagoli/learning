"use strict";

const runServer = function (port) {
  // port = port ?? 3000;
  port ??= 3000;
  console.log(`Server running on port ${port}.`);
};

runServer();
runServer(0);
runServer(4000);

let i = 5;
i = i + 5;
i += 3;
i++; // nur um 1 erhöhen möglich.

// port = port ?? 3000;
//! NEU:
//! Alle logischen Operatoren (?? || &&) können als Short hand verwendet werden:
port ??= 3000; // port = port ?? 3000
