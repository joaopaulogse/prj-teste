
const app = require("./config/express")()
const http = require("http").createServer(app)

http.listen(3000, ()=>{
    console.log(`Server rodando...
    
                http://localhost:${http.address().port}/`)
})


