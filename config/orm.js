// dependencies
const connection = require("./connection.js");

// crud query object
const orm = {
  selectAll: function (table, cb) {
    var query = "SELECT * FROM ?";
    connection.query(query, table, function (err, res) {
      if (err) throw err;
      cb(res);
    })
  },
  insertOne: function (table, setCol, setVal, cb) {
    var query = "INSERT INTO ? SET ? = ?";
    connection.query(qyery, [table, setCol, setVal], function (err, res) {
      if (err) throw err;
      cb(res);
    })
  },
  updateOne: function (table, setCol, setVal, idCol, idVal, cb) {
    var query = "UPDATE ? SET ? = ? WHERE ? = ?";
    connection.query(query, [table, setCol, setVal, idCol, idVal], function (err, res) {
      if (err) throw err;
      cb(res);
    })
  },
  deleteOne: function (table, idCol, idVal, cb) {
    var query = "DELETE FROM ? WHERE ? = ?";
    connection.query(query, [table, idCol, idVal], function (err, res) {
      if (err) throw err;
      cb(res);
    })
  }
}

// export orm
module.exports = orm;