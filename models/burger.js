// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function (table, cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    create: function (table, cols, vals, cb) {
        orm.insert("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (table, objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};


module.exports = burger;
