var express = require('express')
var bodyparser = require('body-parser')
var helmet  = require("helmet")
var config = require("./config.json")

var app = express()

app.use(bodyparser.json());
app.use(helmet())
app.disable('x-powered-by')

var port = 1337;

var router = express.Router()
router.use(function(req, res, next) {
    next()
})

app.get("/test", function(req, res) {
res.end("Hello")
})

app.listen(3000, () => console.log('App listening on port 3000!'))

process.on("unhandledRejection", console.error);
