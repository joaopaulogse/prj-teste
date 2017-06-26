
var fs = require("fs");
module.exports = (app)=>{
var controller = require("../controllers/user")(app);
   
    app.get("/usuario", controller.pagina)
    app.post("/usuario", controller.cadastraUsuario);
    app.get("/usuarios", controller.consultaUsuarios);
    app.post("/upload", (req, res)=>{
            
            // var arquivo = fs.createWriteStream('./');
            console.log(req)
            res.send('Está aqui no Servidor o Arquivo, eu acho!');
    })
}