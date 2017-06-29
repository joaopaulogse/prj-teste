# Project-test

> [sqlite3](https://github.com/mapbox/node-sqlite3)

> [Expressjs](http://expressjs.com/pt-br/)

>[Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  
>[Node](http://nodejs.org/)
  
## Dependencies
```json
"dependencies": {
    "bcrypt-nodejs": "0.0.3",
    "body-parser": "^1.17.1",
    "cookie-parser": "^1.4.3",
    "express": "^4.15.2",
    "express-load": "^1.1.15",
    "express-session": "^1.15.1",
    "multer": "^1.3.0",
    "passport": "^0.3.2",
    "passport-local": "^1.0.0",
    "redis": "^2.7.1",
    "request": "^2.81.0",
    "socket.io": "^1.7.3",
    "sqlite3": "^3.1.8",
    "swig": "^1.4.2"
}
```
## Querys SQL

```sql
          create table if not exists usuario (
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                nome varchar(255),
                email varchar(255),
                senha varchar(40)
            )
```
