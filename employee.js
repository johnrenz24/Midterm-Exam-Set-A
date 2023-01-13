const fs = require('fs')
const employee = function(note)
{
    let findEmp = JSON.parse(note)
    let empNote = findEmp.map(function(n)
    {return n.employee})
    console.log("Employee: " + empNote)
}
module.exports = employee