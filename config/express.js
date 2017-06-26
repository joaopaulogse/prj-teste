const express = require("express");
const body = require("body-parser");
const session = require("express-session");
const swig = require("swig");
const load = require("express-load");
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("db.sqlite3");
var multer  = require('multer')
module.exports = ()=>{
    const app = express();

    app.engine("html", swig.renderFile);
    app.set("view engine", "html");
    app.set("views", "./app/views");
    app.use(express.static("public"));
    app.set("db", db);
    app.use(body.json())
    app.use(body.urlencoded({ extended: true }));
    app.use(multer().any());
    db.serialize(function(){
        db.run(`
            create table if not exists usuario (
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                nome varchar(255),
                email varchar(255),
                senha varchar(40)
            )
        `);
    })
    app.use(function(req, res, next){
        console.log(`[${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}]: ${req.method} ${req.originalUrl} - ${req.protocol} - ${req.connection.bytesRead}`);
        next();
    })
    app.use(session({
        secret: "$ECR#T@",
        cookie: {maxAge: 60 * 1000}, 
        resave: true,
        saveUninitialized: true
    }));
    load("models", {cwd:"./app"})
        .then("controllers")
        .then("routes")
        .into(app);
    app.get("/teste", (req,res)=>{
        
        res.render('teste')
    });
    return app;
}