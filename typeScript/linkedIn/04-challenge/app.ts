function query<T>(
  items: T[],
  // Opt1:
  // query: Record<keyof T, (val: T[keyof T]) => boolean>

  // Opt2: more correct using indexed accessor type
  query: {
    // keyof T => limits it to only property names in the Type T
    // TProp in => Generic Type Name
    [TProp in keyof T]?: (val: T[TProp]) => boolean;
  }
) {
  return items.filter((item) => {
    // iterate through each of the item's properties
    for (const property of Object.keys(item)) {
      // get the query for this property name
      const propertyQuery = query[property];

      // see if this property value matches the query
      if (propertyQuery && propertyQuery(item[property])) {
        return true;
      }
    }

    // nothing matched so return false
    return false;
  });
}

const matches = query(
  [
    { name: "Ted", age: 12 },
    { name: "Angie", age: 31 },
  ],
  {
    name: (name) => name === "Angie",
    age: (age) => age > 30,
  }
);
