// dependencies
const connection = require("./connection.js");

// crud query object
const orm = {
  selectAll: function (tableName) {
    return new Promise((resolve, reject) => {
      var query = "SELECT * FROM ?";
      connection.query(query, tableName, function (err, res) {
        if (err) reject(err);
        return resolve(res);
      })
    })
  },
  insertOne: function (tableName, burgerName) {
    return new Promise((resolve, reject) => {
      var query = "INSERT INTO ? SET burger_name = ?";
      connection.query(qyery, [tableName, burgerName], function (err, res) {
        if (err) reject(err);
        return resolve(res);
      })
    })
  },
  updateOne: function (tableName, devoured, burgerName) {
    return new Promise((resolve, reject) => {
      var query = "UPDATE ? SET devoured = ? WHERE burger_name = ?";
      connection.query(query, [tableName, devoured, burgerName], function (err, res) {
        if (err) reject(err);
        return resolve(res);
      })
    })
  },
  deleteOne: function (tableName, burgerName) {
    return new Promise((resolve, reject) => {
      var query = "DELETE FROM ? WHERE burger_name = ?";
      connection.query(query, [tableName, burgerName], function (err, res) {
        if (err) reject(err);
        return resolve(res);
      })
    })
  }
}

// export orm
module.exports = orm;