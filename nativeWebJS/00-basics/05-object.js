"use strict";

//! Object => "Dictionary" -> Key/Value Paare
const company = {
  name: "the native web",
  location: "Riegel am Kaiserstuhl",
  foundedIn: 2012,
  // Hier kann nur mit einer Function expression gearbeitet werden,
  // weil ein Wert definiert werden muss.
  fullName: function () {
    return `${this.name} GmbH`;
  },
  fullName2() {
    return `${this.name} GmbH`;
  },
};

console.log(company.name);
console.log(company["name"]);
const propertyName = "name";
console.log(company[propertyName]); //bspw. Benutzereingabe -> dynamischer Zugriff

// weitere Properties anhängen:
company.country = "Germany";

// wenn man nicht einmal ein leeres Object angeben möchte, wird NULL verwendet.
const person = null;
