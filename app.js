//import code core modules
const fs = require('fs')
fs.writeFileSync('app.txt','hello')
console.log(fs.readFileSync('app.txt').toString())


//////////////////
const validator = require('validator')
console.log(validator.isEmail('mohamedmohyeldin@gmail.com'))
////////////////////////
// console.log(process.argv[2])
// const command = process.argv




/////////////////////////////////////////
const yargs = require('yargs')

// yargs.command({
//     command:'add',
//     describe:'Add note',
//     handler: function(){
//         console.log('Note has been added')
//     }
// })


// yargs.command({
//     command:'delete',
//     describe:'delete note',
//     handler: function(){
//         console.log('Note has been delete')
//     }
// })


// yargs.command({
//     command:'list',
//     describe:'list note',
//     handler: function(){
//         console.log('Note has been list')
//     }
// })

// yargs.command({
//     command:'read',
//     describe:'read note',
//     handler: function(){
//         console.log('Note has been read')
//     }
// })
// yargs.parse()
//////////////////////////////
yargs.command({
    command:'add',
    describe:'Add note',
    builder:{
        title:{
            describe:'Title of note to be added',
            demandOption:true,
            type: "string"
        },
        body:{
            describe:'Body of note to be added',
            demandOption:true,
            type: 'string'
        },
    },
    handler: function(arg){
        console.log('note has been added')
    }
})
yargs.command({
    command:'read',
    describe:'read note',
    handler:function(){
        console.log(not)
    }
})