"use strict";
import { createTodo } from "../createTodo.js";

const noteTodo = function ({ store }) {
  return async function (req, res) {
    // app.use(express.json()) in getApi.js sorgt für automatisches parsen der request
    // wenn .json geschickt wird, wird an das json-Objekt automatisch req.body angehängt => req.body

    const { description } = req.body;

    //const description = req.body.description; // Validierung/Fehlerbehandlung hier für Bspl. ausgelassen

    // factory Function in lib => createTodo.js
    const todo = createTodo({ description });
    await store.noteTodo({ todo });

    res.json({ id: todo.id });
  };
};

export { noteTodo };
