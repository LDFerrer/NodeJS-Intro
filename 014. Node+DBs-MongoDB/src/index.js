import mongoose from 'mongoose';

const host = 'mongodb://127.0.0.1:27017/films?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.2.3';

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

const conn = mongoose.createConnection(
    host,
    { maxPoolSize: 200 }
);

conn.on( 'error', err => {
    console.log( 'Error', err );
    return process.exit();
});

conn.on( 'connected', () => console.log( 'Conectado a mongo;' ) );

const filmSchema = new mongoose.Schema(
    {
        _id: { type: String, trim: true, required: true},
        title: { type: String, trim: true, required: true},
        poster: { type: String, trim: true, required: true},
    },
    {
        strict: false
    }
);

const Film = conn.model( 'Film', filmSchema );

const newDocument = new Film({
    _id: new mongoose.Types.ObjectId(),
    title: 'Star Wars: The last Jedi',
    poster: 'https://static.wikia.nocookie.net/disney/images/7/7a/Star_Wars_The_Last_Jedi_Poster_Official.jpg/revision/latest?cb=20171010025646&path-prefix=es'
});

newDocument.save( err => {
    if( err ){
        throw err;
    }

    console.log( 'Almacenado.' );
});