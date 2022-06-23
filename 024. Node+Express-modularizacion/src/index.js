import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import router from './router';

const app = express();

app.disable( 'x-powered-by' );

app.set( 'env', 'development' );

app.use( morgan('combined') );
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

app.listen( '9000', () => {
    console.log( 'Servidor arrancado en http://localhost:9000' );
});