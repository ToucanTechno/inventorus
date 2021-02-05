const express = require('express'),
sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.serialize(function () {
    db.run("CREATE TABLE test_table (info TEXT)");

    var stmt = db.prepare("INSERT INTO test_table VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("test_value " + i);
    }

    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM test_table", function (err, row) {
        console.log(row.id + ": " + row.info);
    });
});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});

/* handle an uncaught exception & exit the process */
process.on('uncaughtException', function (err)
{
	console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
	console.error(err.stack);

	reporter("uncaughtException", (new Date).toUTCString(), err.message, err.stack);

	process.exit(1);
});

/* handle an unhandled promise rejection */
process.on('unhandledRejection', function (reason, promise)
{
	console.error('unhandled rejection:', reason.message || reason);

	reporter("uncaughtException", (new Date).toUTCString(), reason.message || reason);
})

const app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/v1/customer', customer);
app.use('/api/v1/generate_uid', generate_uid);

const server = app.listen(function () {
    console.log('Listening on port ' + port);
});

module.exports = app;