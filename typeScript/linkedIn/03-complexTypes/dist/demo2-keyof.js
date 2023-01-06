// &
let secondaryContact = {
    id: 123456,
    name: "Elp Aso",
    status: "inactive",
};
// const field: ContactFields = "...";
// function getValue(source, propertyName: keyof Contact2) {
//   // the keyof type limits the values of the second parameter to those of the Contact2 type
//   return source[propertyName];
// }
// $ Refactored as a generic function:
function getValue(source, propertyName) {
    return source[propertyName];
}
const value = getValue(contact, "");
const value2 = getValue({ min: 1, max: 200 }, "min");
// $ Refactored as a generic function with a second generic type that can be referenced later on
function getValueMulti(source, propertyName) {
    return source[propertyName];
}
