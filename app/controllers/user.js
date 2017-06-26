module.exports = (app) =>{
    var db = app.get("db");
    var controller = {}
    controller.pagina = (req,res)=>{
        res.render('login');
    };    
    controller.cadastraUsuario = (req, res)=>{
        var usuario = req.body.usuario;
        console.log(usuario);
        if(usuario.nome!="" && usuario.email!="" && usuario.senha!=""){
            db.serialize(function(){
                var stmt = db.prepare("INSERT INTO USUARIO (nome, email, senha) VALUES (?,?,?);");
                    stmt.run(usuario.nome, usuario.email, usuario.senha, err=>{
                        if(err){
                            res.send({erro:"não cadastrado: "+ err});
                        }
                    });
                stmt.finalize();
            });
            res.send({sucesso:"cadastrado com sucesso"});
        }else{
                res.send({erro:'Não Pode ter campos em branco'});
        }
    }
    function pegaUsuario(){
        return new Promise ((resolve, reject)=>{
            db.all("select * from usuario", (err, row)=>{
                if(err){
                    reject(err);
                }
                resolve(row)
            })
        })
    }
    controller.consultaUsuarios = (req, res)=>{
        pegaUsuario()
        .then(row => res.json(row))
        .catch(err=>res.json(err));
    }
    return controller;
}