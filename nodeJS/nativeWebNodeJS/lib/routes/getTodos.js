"use strict";

// Higher Order Funktion (Funktion, die eine Funktion zurück gibt)
// => getTodos wird parametrisiert
const getTodos = function ({ store }) {
  return async function (req, res) {
    // In-Memory Variante:
    const remainingTodos = await store.getRemainingTodos();
    res.json(remainingTodos);
  };
};

export { getTodos };
