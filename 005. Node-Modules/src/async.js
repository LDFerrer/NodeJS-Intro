import fs from 'fs';

export default file => {
    console.log( 'Asíncrono.' );

    fs.readFile( file, ( err, contents ) => {
        if( err ){
            return console.log( err );
        }

        const lines = contents.toString().split('\n');

        for( let line of lines ){
            console.log( `Numero de caracteres por linea: ${line.length}` );
        }

        console.log( `Numero total de lineas: ${lines.length}` );
    });

    console.log( `Archivo seleccionado: ${file}` );
};