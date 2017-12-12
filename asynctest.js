// async test

const readline = require('readline');


const {
  pify,
  pMap,
  pAll,
  pDueue,
  pCatchIf
} = require('promise-fun');

//cfr.    var { x, y, z } = { x: 3, y: 5, z: 7, a: 50, b: 60, c: 70 }


//old school node style callbacks
function sleepCallback( time, callback ) {
  setTimeout( callback, time )
}

//the 'async' version returning a Promise
var sleep = pify( sleepCallback )
//doing the same manually would be done like so
/*
function sleep( time ) {
  return Promise( (resolve, reject) => sleepCallback( time, resolve ) )
}
*/



async function main() {


  console.log( "Going to sleep" )
  await pify( sleepCallback )( 1000 )
  console.log( `Awake

` )


  console.log( "Going to sleep (AGAIN)" )
  await sleep( 1000 )
  console.log( `Awake (AGAIN)
` )


  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function rlQuestion( q ) {
    return new Promise( ( resolve, reject ) =>
        rl.question( q, resolve )
      )
  }



  try {

    //pify( rl.question )( "hello", answer => console.log( "PIFY answer", answer ) )
    //process.exit(0)

    console.log( "Version using async/await" )
    console.log( "-------------------------" )


    console.log( "Q1." )


    let answer = await rlQuestion( 'What do you think of Node.js? ' )
    console.log( 'Thank you for your valuable feedback:', answer )

    console.log( "Q2." )

    answer = await rlQuestion( `What do you think of the workshop? ` )
    console.log( 'Thank you for your valuable feedback:', answer )
  }
  catch (e) {
    console.log( `Something went wrong...`, e )
  }
  finally {
    //LET'S LEAVE IT OPEN FOR NOW
    //rl.close()
  }


  console.log()
  console.log()
  await sleep( 2000 )

  console.log( "Version using .then(...)" )
  console.log( "------------------------" )

  console.log( "Q1." )

  rlQuestion( 'What do you think of Node.js? ' ).then(
      (answer) => console.log( 'Thank you for your valuable feedback:', answer )
    )
    .then( () => console.log( "Q2." ) )
    .then( () => rlQuestion( `What do you think of the workshop? ` ) )
    .then( (answer) => console.log( 'Thank you for your valuable feedback:', answer ) )
    .then( () => rl.close() )
    .catch( (e) => console.log( `Something went wrong...`, e )
)

}


main()

