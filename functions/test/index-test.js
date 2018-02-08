'use strict';

const expect = require( 'chai' ).expect;

describe('Test checkstats', () => {

  it( 'Test index.js', ( done ) => {
    const app = require( '../index' );
    const fakeEvent = {
      data: {},
      params: {}
    }
    app.checkstats( fakeEvent )
    done()
  } );

} );
