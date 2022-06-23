import fs from 'fs'
import readline from 'readline'

export default file => {
    console.log( 'Eventos' );

    let lines = 0;

    const rl = readline.createInterface({
        input: fs.createReadStream( file ),
        crlfDelay: Infinity
    });

    rl.on( 'close', () => console.log( `Numero total de lineas: ${lines}` ) );

    rl.on( 'line', line => {
        ++lines;
        console.log( `Numero total de caracteres por linea: ${line.length}` );
    });
};