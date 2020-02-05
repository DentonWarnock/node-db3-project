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
    .then(([id]) => {
      // return newId;
      // return db("schemes")
      //   .where({ id })
      //   .first();
      return findById(id);
    })
    .catch(err => console.log(err.message));
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
