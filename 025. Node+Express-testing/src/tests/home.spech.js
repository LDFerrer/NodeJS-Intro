import fetch from 'node-fetch';
// import got from 'got';
import { expect } from 'chai';
import cheerio from 'cheerio';

import server from  '../';

describe( 'Test: Home', () => {
    /** Debes haber arrancado el servidor antes de iniciar las pruebas
    */
    // beforeEach( () => {
    //     server.start();
    // });
    
    // afterEach( () => {
    //     server.close();
    // });

    describe( 'GET /', () => {
        it( 'It should has a class name called home', async function(){
            const res = await fetch('http://localhost:9000');
            const text = await res.text();
            const domStr = text.toString ? text.toString() : text.body;
            const $ = cheerio.load( domStr );
            expect( $('body').hasClass('home') ).to.be.true;
        });
    });

    let usuario = 'jdamianferrer';
    describe( `GET /${usuario}`, () => {
        it( 'It should has a name on the body', async function(){
            const res = await fetch( `http://localhost:9000/${usuario}` );
            const text = await res.text();
            const domStr = text.toString ? text.toString() : text.body;
            const $ = cheerio.load( domStr );
            expect( $('.bd-title').text() ).to.be.equal( `Bienvenido usuario ${usuario}` );
        });
    });
});