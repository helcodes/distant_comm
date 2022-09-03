var express = require('express')
var connection = require('../database.js')
var router = express.Router()

var sql01="SELECT qid, question FROM questions";

router.get('/questions-list', function (req, res, next) {
  connection.query(sql01, function (err, data, fields) {
    if (err) {
      req.flash('error', err)
      res.render('questions', { data: '' })
    } else {
      res.render('questions-list', { title: "Questions: ", questionsData: data })
    }
  })
})
module.exports = router