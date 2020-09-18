// dependencies
const orm = require("../config/orm.js");

// crud burger object
const burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (err, res) {
      if (err) throw err;
      cb(res);
    })
  },
  insertOne: function (burgerCol, burgerVal, cb) {
    orm.insertOne("burgers", burgerCol, burgerVal, function (err, res) {
      if (err) throw err;
      cb(res);
    })
  },
  updateOne: function (devouredCol, devouredVal, burgerCol, burgerVal, cb) {
    orm.updateOne("burgers", devouredCol, devouredVal, burgerCol, burgerVal, function (err, res) {
      if (err) throw err;
      cb(res);
    })
  },
  deleteOne: function (burgerCol, burgerVal, cb) {
    orm.deleteOne("burgers", burgerCol, burgerVal, function (err, res) {
      if (err) throw err;
      cb(res);
    })
  }
}

// export burger
module.exports = burger;