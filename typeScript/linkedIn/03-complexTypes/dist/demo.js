function getBirthDate(contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate);
    }
    else {
        // $ TS recognizes automatically, that birthDate here must be typeof Date
        return contact.birthDate;
    }
}
let primaryContact = {
    id: 12345,
    name: "Son Diego",
    status: "active",
};
