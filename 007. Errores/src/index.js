process.on( 'unhandleRejection', ( err, p ) => {
    console.log( `Custome unhandleRejection ${err}` );
});

process.on( 'uncaughtException', ( err ) => {
    console.log( `Custome uncaughtException, ${err}` );
});

// Promise( resolve => JSON.parse({ color: 'blue' }) );
// test();
throw 'mi error';