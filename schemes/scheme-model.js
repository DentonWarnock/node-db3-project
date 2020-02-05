const db = require("../data/db-config.js");

function find() {
  return db("schemes").select();
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps(id) {
  return db("schemes")
    .join("steps", "schemes.id", "steps.scheme_id")
    .where({ scheme_id: id })
    .orderBy("step_number")
    .select(
      "steps.id as steps id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    );
}

async function add(newScheme) {
  return db("schemes")
    .insert(newScheme)
    .then(([newId]) => {
      // return newId;
      return db("schemes")
        .where({ id: newId })
        .first();
    })
    .catch(err => console.log(err.message));
}

function update() {}

function remove() {}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
