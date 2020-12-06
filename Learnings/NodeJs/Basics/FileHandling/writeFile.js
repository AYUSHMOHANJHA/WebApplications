var fs = require('fs');

fs.writeFile("a.txt","I am new",function(err){
    if(err) throw err;
    console.log('Replaced');
});