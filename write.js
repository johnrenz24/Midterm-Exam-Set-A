const fs = require('fs')
const write = function(data = "default")
{
    fs.writeFileSync('data.txt', data)
}
module.exports = write