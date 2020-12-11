var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'debian-sys-maint',
  password: '0Cgu7DOStjtcOEcd',
  database: 'mysql',
  insecureAuth : true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});