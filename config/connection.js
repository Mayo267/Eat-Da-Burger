// Set up MySQL connection.
var mysql = require("mysql");

if(process.env.JAWSDB_URL){
    connection = myswl.createConnection(process.end.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Amelia309",
        database: "burger_db"
    });
};

connection.connect();

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
