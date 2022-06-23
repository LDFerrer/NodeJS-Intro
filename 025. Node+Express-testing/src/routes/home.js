import express from 'express';

const router = express.Router();

router.get( '/', ( req, res, next ) => {
    res.render( 'home', {
        title: 'Curso NodeJS',
        message: 'Curso Node.JS'
    });

    res.end();
});

export default router;