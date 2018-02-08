'use strict';

const expect = require( 'chai' ).expect;

describe('Test checkstats', () => {

  it( 'Test index.js', ( done ) => {
    const app = require( '../index' );
    const fakeEvent = {
      data: { data: Buffer.from( JSON.stringify( { url: 'https://miya.io/' } ) ) },
      params: {}
    }
    app.checkstats( fakeEvent )
    done()
  } );

} );
