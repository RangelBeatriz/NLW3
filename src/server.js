//importar dependência/pacote
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//iniciando o express
const server = express();

//utilizando os arquivos estáticos
server
    .use(express.static('public'))

    //utilizar body do req
    .use(express.urlencoded({ extended: true }))

//configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

//criar rotas
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)


//ligar o servidor
server.listen(5500)