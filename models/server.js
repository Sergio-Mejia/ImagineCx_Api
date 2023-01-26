const express = require('express');
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usersPath = '/api/imaginecx';

        //Middlewares
        this.middlewares();

        //Rutas app
        this.routes();  
    }

    middlewares(){
        //Config CORS
        this.app.use(cors());

        //Lectura y parse del body
        this.app.use( express.json() );

        //Directorio publico
        this.app.use( express.static('public'));
    }

    routes() {
        //Que necesito llamar? -> require('../routes/user')
       this.app.use(this.usersPath, require('../routes/contact'));
     
    }

   

    listen(){
        this.app.listen( this.port , () => {
            console.log('Server Running port', this.port); 
        })
    }


}

module.exports = Server;