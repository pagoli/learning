"use strict";
// seit nodeJs 15 mit crypto.randomUUID()
import crypto from "crypto";

const createTodo = function ({ description }) {
  // gibt Objekt zurück
  return {
    id: crypto.randomUUID(),
    description: description,
    status: "open",
  };
};

export { createTodo };
