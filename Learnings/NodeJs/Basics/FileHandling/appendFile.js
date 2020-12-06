var fs = require('fs');

fs.appendFile('a.txt',"Hello Rishi Ayush", function(err){
    if(err) throw err;
    console.log('Saved');
});