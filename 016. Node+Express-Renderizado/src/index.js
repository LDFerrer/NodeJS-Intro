import express from 'express';

const app = express();

app.get( '/', ( req, res ) =>{
    res.end( 'Hola Mundo' );
});

app.listen( '9000', () => {
    console.log( 'Servidor arrancado en http://localhost:9000' );
});