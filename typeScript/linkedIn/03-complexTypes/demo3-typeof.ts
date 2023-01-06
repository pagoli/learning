const x = "string";
const y = true;
console.log(typeof x); // --> "string"
console.log(typeof y); // --> "boolean"

type ContactName3 = string;
type ContactStatus3 = "active" | "inactive" | "new";
type ContactBirthDate3 = Date | number | string;

interface Contact {
  id: number;
  name: ContactName3;
  birthDate?: ContactBirthDate3;
  status?: ContactStatus3;
}

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

function save(source: typeof myType) {} // As myType variables are defined, parameters types in save() must match;
