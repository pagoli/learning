// &

type ContactName2 = string;
type ContactStatus2 = "active" | "inactive" | "new";
type ContactBirthDate2 = Date | number | string;

interface Contact2 {
  id: number;
  name: ContactName2;
  birthDate?: ContactBirthDate2;
  status?: ContactStatus2;
  email?: string;
}

let secondaryContact: Contact = {
  id: 123456,
  name: "Elp Aso",
  status: "inactive",
};

// $ Type Alias consisting of all of the properties of the contact type
//  with KEYOF
type ContactFields = keyof Contact2;

// const field: ContactFields = "...";

// function getValue(source, propertyName: keyof Contact2) {
//   // the keyof type limits the values of the second parameter to those of the Contact2 type
//   return source[propertyName];
// }

// $ Refactored as a generic function:
function getValue<T>(source: T, propertyName: keyof T) {
  return source[propertyName];
}

const value = getValue(contact, "");
const value2 = getValue({ min: 1, max: 200 }, "min");

// $ Refactored as a generic function with a second generic type that can be referenced later on
function getValueMulti<T, U extends keyof T>(source: T, propertyName: U) {
  return source[propertyName];
}
