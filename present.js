const fs = require('fs')
const present = function(note)
{
    let newNote = JSON.parse(note)
    console.log(newNote)
}
module.exports = present