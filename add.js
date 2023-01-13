const fs = require('fs')
const add = function(note=[], oldNote)
{
    let finalNote = JSON.parse(oldNote)
    finalNote.push(note)
    let objective = JSON.stringify(finalNote)
    fs.writeFileSync('data.txt', objectNote)
}

module.exports = add