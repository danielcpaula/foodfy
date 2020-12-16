const express = require('express')
const nunjucks = require('nunjucks')
const receitas = require('./data')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
})

server.get("/", function(req, res) {
  const melhoresReceitas = receitas.slice(0, 6)
  return res.render("index", {items: melhoresReceitas})
})

server.get("/receitas", function(req, res) {
  return res.render("receitas", {items: receitas})
})

server.get("/sobre", function(req, res){
  return res.render("sobre")
})

server.use(function(req, res) {
  res.status(404).send("pagina não encontrada")
})

server.listen(5000, function(){
  console.log("Server is running")
})