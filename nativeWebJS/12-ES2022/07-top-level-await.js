//* no "use strict"
//& Top Level Await

// früher:
async function wrapper() {
  const response = await fetch("https://api.thenativeweb.io");
  const data = await response.json();
}

// await wrapper(); // "Henne-Ei-Situation"; await wird benötigt;
// Lösung vor ES2022:
wrapper().catch((ex) => {
  // ...
});
// oder async Lambda Ausdruck / anonymous function
(async () => {
  await wrapper();
})();

//! NEU:
//  Await funktioniert auf oberster Ebene;
//  nur in Modulen möglich i.e. im Broswer:
//$ <script type="module"></script>
//  oder in NodeJS (Module, die in der
//$ package.json als "type: module"
//  eingetragen sind);
//  oder in NodeJS:
//$ Dateien mit .mjs Endung
