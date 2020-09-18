// dependencies
const connection = require("./connection.js");

// crud query object
const orm = {
  selectAll: function (table, cb) {
    const query = "SELECT * FROM ?";
    connection.query(query, [table], function (err, res) {
      if (err) throw err;
      cb(res);
    })
  },
  insertOne: function (table, setCol, setVal, cb) {
    const query = "INSERT INTO ? SET ? = ?";
    connection.query(query, [table, setCol, setVal], function (err, res) {
      if (err) throw err;
      cb(res);
    })
  },
  updateOne: function (table, setCol, setVal, idCol, idVal, cb) {
    const query = "UPDATE ? SET ? = ? WHERE ? = ?";
    connection.query(query, [table, setCol, setVal, idCol, idVal], function (err, res) {
      if (err) throw err;
      cb(res);
    })
  },
  deleteOne: function (table, idCol, idVal, cb) {
    const query = "DELETE FROM ? WHERE ? = ?";
    connection.query(query, [table, idCol, idVal], function (err, res) {
      if (err) throw err;
      cb(res);
    })
  }
}

// export orm
module.exports = orm;