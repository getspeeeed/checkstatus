'use strict';

const functions = require( 'firebase-functions' )
const getStats = require( './lib/getstats' )

exports.checkstats = functions.pubsub.topic( 'checkstats' ).onPublish( ( event ) => {

  const data = JSON.parse( Buffer.from( event.data.data, 'base64' ).toString() );

  const st = new getStats( data.url );
  st.req( ( res ) => {
    console.log( res )
  } )

  return true;
} );
