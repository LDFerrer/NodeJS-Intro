import express from 'express';

const router = express.Router();

router.get( '/', ( req, res ) => {
    res.render( 'temario', {
        title: 'Curso NodeJS',
    });

    res.end();
});

export default router;