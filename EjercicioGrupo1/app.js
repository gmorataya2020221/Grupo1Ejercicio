const express = require('express');
const cors = require('cors');
var app = express();

const usuariosRoutes = require('./src/routers/usuarios.router');
const empresasRoutes = require('./src/routers/empresa.router');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use('/api', usuariosRoutes, empresasRoutes);


module.exports = app;