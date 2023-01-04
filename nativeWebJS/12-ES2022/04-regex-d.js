"use strict";

const uuid =
  /^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/d;

const result = uuid.exec("550e8400-e29b-11d4-a716-446655440000");

result.indices; // => array mit indices [[0,36], [0,8], [9,13, ...]
