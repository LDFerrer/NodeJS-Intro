import http from 'http';
import fs from 'fs';
import path from 'path';

const server = http.createServer( (request, response) => {
	let filePath = request.url;
	if( filePath === '/' ){
		filePath = 'index.html';
	}
	filePath = `./src/${filePath}`;

	const extname = path.extname( filePath );

	let contentType;
	switch( extname ){
		case '.css':
			contentType = 'text/css';
		break;
		case '.html':
			contentType = 'text/html';
		break;
	}

	response.writeHead( 200, {'Content-Type': `${contentType}; charset: UTF-8;`} );

	fs.readFile( filePath, ( err, content ) => {
		if( err ){
			return console.log( err );
		}

		response.write( content );
		response.end();
	});
});

server.listen( 8000, 'localhost', err => {
	if( err ){
		return console.log( 'Error: ',  err );
	}

	console.log( `Server abierto en http://localhost:8000` );
});