require('dotenv').config();
const { process } = require('ipaddr.js');
var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: "localhost",//process.env.DATABASE_HOST,
  user: "root",
  password: "questSqlPw",
  database: "distant_comm"
});

var sql01="SELECT qid, question FROM questions";
var questions=""
/*connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql01, function (err, result, fields) {
    if (err) throw err;
    console.log("Result: " + result);
    //console.log(result[2].address)
    console.log(result[0].question);
    questions+=result[0].question;
  });
});*/

connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Database connected')
})
module.exports = connection



