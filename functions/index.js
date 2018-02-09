'use strict';

const functions = require( 'firebase-functions' )
const getStatus = require( './lib/getstatus' )

exports.checkstatus = functions.pubsub.topic( 'checkstatus' ).onPublish( ( event ) => {

  const data = JSON.parse( Buffer.from( event.data.data, 'base64' ).toString() );

  const getstatus = new getStatus( data.url );
  getstatus.req( ( res ) => {
    console.log( res )
  } )

  return true;
} );
