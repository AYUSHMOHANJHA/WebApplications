var fs = require('fs');
var rs = fs.createReadStream('./temp.txt');
rs.on('open',function(){
    console.log('The file is Open');
});