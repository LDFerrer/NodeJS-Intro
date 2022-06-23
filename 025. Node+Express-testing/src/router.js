import home from './routes/home';
import units from './routes/units';
import user from './routes/user';

export default app => {
    app.use( '/', home );
    app.use( '/temario', units );
    app.use( '/', user )
}