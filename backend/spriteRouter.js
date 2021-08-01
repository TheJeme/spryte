const spriteRouter = require("express").Router();
const seedrandom = require("seedrandom");
const hash = require('object-hash');

spriteRouter.get("/:id", async (request, response) => {
  const id = request.params.id;
  const rng = seedrandom(hash(id));
  const filepath = `sprites/${Math.floor(rng() * 1000)}.png`;
  response.sendFile(filepath, { root: __dirname });
});

module.exports = spriteRouter;
