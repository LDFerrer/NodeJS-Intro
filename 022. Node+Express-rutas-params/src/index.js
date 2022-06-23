import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();

app.disable( 'x-powered-by' );

app.set( 'env', 'development' );

app.use( morgan('combined') );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }) );

app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'pug' );

app.get( '/', ( req, res, next ) => {
    res.render( 'home', {
        title: 'Curso NodeJS',
        message: 'Curso Node.JS'
    });

    res.end();
});

app.get( '/temario', ( req, res ) => {
    res.render( 'temario', {
        title: 'Curso NodeJS',
    });

    res.end();
});

app.get( '/:user', ( req, res ) => {
    res.render( 'user', {
        title: 'NodeJS | User',
        message: `Bienvenido usuario ${req.params.user}`
    });

    res.end();
});

app.use( '/static', express.static( path.join( __dirname, 'public' )) );

app.listen( '9000', () => {
    console.log( 'Servidor arrancado en http://localhost:9000' );
});