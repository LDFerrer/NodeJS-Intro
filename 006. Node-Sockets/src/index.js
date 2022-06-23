import net from 'net';

const server = net.createServer( socket => {
    socket.on( 'data', data => {
        console.log( data.toString() );
        socket.write( `${data.toString()} Mundo?` );
    })
});

server.on( 'error', () => console.log( 'Se ha producido un error.' ) );

server.listen(
    {
        host: 'localhost',
        port: 8000,
        exclusive: true
    },
    () => console.log( `Servidor socket abierto en ${server.address()}` )
);