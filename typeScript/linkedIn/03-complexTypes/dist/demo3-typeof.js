const x = "string";
const y = true;
console.log(typeof x); // --> "string"
console.log(typeof y); // --> "boolean"
// function toContact(nameOrContact: string | Contact): Contact {
//   if (typeof nameOrContact === "object") {
//     return {
//       id: nameOrContact.id,
//       name: nameOrContact.name,
//       status: nameOrContact.status,
//     };
//   } else {
//     return {
//       id: 0,
//       name: nameOrContact,
//       status: "active",
//     };
//   }
// }
const myType = { min: 1, max: 200 };
function save(source) { } // As myType variables are defined, parameters types in save() must match;
