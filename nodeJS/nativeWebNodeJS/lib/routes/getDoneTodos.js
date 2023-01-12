"use strict";

const getDoneTodos = function ({ store }) {
  return async function (req, res) {
    // In-Memory Variante:
    const doneTodos = await store.getDoneTodos();
    res.json(doneTodos);
  };
};

export { getDoneTodos };
