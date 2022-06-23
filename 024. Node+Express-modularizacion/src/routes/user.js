import express from 'express';

const router = express.Router();

router.get( '/:user', ( req, res ) => {
    res.render( 'user', {
        title: 'NodeJS | User',
        message: `Bienvenido usuario ${req.params.user}`
    });

    res.end();
});

router.get( '/:user/bio', ( req, res) => {
    console.log( 'Debemos mostrar la Bipografía del usuario', req.params.user );
});

export default router;