let hello = require( './modules/module_hello' )()
let hello2 = require( './modules/module_hello' )()

let goodbye = require( './modules/module_goodbye' )()
let goodbye2 = require( './modules/module_goodbye' )()

hello.push( "!!!" )

goodbye.push( "!!!" )


console.log( "hello = ", hello, "hello2 = ", hello2 )
console.log( "goodbye = ", goodbye, "goodbye2 = ", goodbye2 )




let hello3 = require( './modules/module_using_hello' )()
let hello4 = require( './modules/module_using_hello' )()

hello3.push( "!!!" )
console.log( "hello3 = ", hello3, "hello4 = ", hello4 )


let hello_v2_1 = require( './modules/module_hello_v2' )
let hello_v2_2 = require( './modules/module_hello_v2' )

hello_v2_1.push( "???" )
console.log( "hello_v2_1 = ", hello_v2_1, "hello_v2_2 = ", hello_v2_2 )






let inc1 = require( './modules/module_incrementer' )( 5 )
let inc2 = require( './modules/module_incrementer' )( 7 )

console.log( "inc1(2) = ", inc1(2), "inc2(2) = ", inc2(2) )