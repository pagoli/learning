"use strict";

// Nullish Coalescing Operator
// Ähnlich dem Oder Operator
const runServer = function (port) {
  // früher:
  // || => greift 0, NULL und UNDEFINED
  // port = port || 3000 // es wird geprüft, ob linker Wert falsy ist;

  // neu:
  // => greift nur bei NULL und UNDEFINED
  port = port ?? 3000;

  console.log(`Server running on port ${port}.`);
};

runServer();
runServer(0);
runServer(4000);
