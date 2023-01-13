const fs = require('fs')
const read = function()
{
    return fs.readFileSync('data.txt', 'utf8')
}
module.exports = read