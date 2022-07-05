const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

require('dotenv').config();

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.pathList = {
            pathAplication: '/api/aplication',
            pathShared: '/api/shared',
            pathInicio: '/api/inicio',
            pathProduct: '/api/product',
            pathContacto: '/api/contacto',
        }

        this.connectDB();
        this.middlewares()
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.pathList.pathAplication, require('../routes/aplication'));
        this.app.use(this.pathList.pathShared, require('../routes/shared'));
        this.app.use(this.pathList.pathProduct, require('../routes/product'));
        this.app.use(this.pathList.pathInicio, require('../routes/inicio'));
        this.app.use(this.pathList.pathContacto, require('../routes/contacto'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

module.exports = Server;