import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import router from './router';

let _server;

const server = {
    start () {
        const app = express();

        app.disable( 'x-powered-by' );

        app.set( 'env', process.env.NODE_ENV );

        if( process.env.NODE_ENV !== 'test' ){
            app.use( morgan('combined') );
        }
        
        app.use( bodyParser.json() );
        app.use( bodyParser.urlencoded({ extended: false }) );
        
        app.set( 'views', path.join( __dirname, 'views' ) );
        app.set( 'view engine', 'pug' );
        
        router( app );
        
        app.use( '/static', express.static( path.join( __dirname, 'public' )) );
        
        app.use( ( req, res, next ) => {
            res.render( '404', {
                title: 'Curso NodeJS - Error',
                message: 'La ruta a la que trata de acceder, no existe!'
            });
        
            next();
        });
        
        _server = app.listen( '9000', () => {
            console.log( 'Servidor arrancado en http://localhost:9000' );
        });
    },
    close () {
        _server.close();
    }
};

export default server;

if( module.children ){
    server.start();
}