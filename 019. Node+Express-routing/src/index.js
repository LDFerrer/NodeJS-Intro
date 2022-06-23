import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
app.disable( 'x-powered-by' );

app.set( 'env', 'development' );

app.use( morgan('tiny') );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }) );

app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'pug' );

app.get( '/', ( req, res ) => {
    res.write(`
        <h1>Curso NodeJS</h1>
        <a href="/temario/unidad1">Unidad 1</a>
        <a href="/temario">temario</a>
    `);

    res.end();
});

app.get( '/temario/unidad1', ( req, res ) => {
    res.write(`
        <h1>Temario del Curso NodeJS</h1>
        <a href="/">Volver</a>
    `);

    res.end();
});

app.listen( '9000', () => {
    console.log( 'Servidor arrancado en http://localhost:9000' );
});