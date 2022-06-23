import http from 'http';
import fs from 'fs';

const file = './src/index.html';

const server = http.createServer( (request, response) => {
	response.writeHead( 200, { 'Content-Type': 'application/json' } );

	response.end( JSON.stringify({key:'valor'}) );
	response.end();

	// fs.readFile( file, ( err, content ) => {
	// 	if( err ){
	// 		return console.log( err );
	// 	}

	// 	response.write( content );
	// 	response.end();
	// });
});

server.listen( 8000, 'localhost', err => {
	if( err ){
		return console.log( 'Error: ',  err );
	}

	console.log( `Server abierto en http://localhost:8000` );
});