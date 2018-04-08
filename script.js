/*
var OSinfo = require('./modules/OSinfo');
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
emitter.on('beforeCommand', function(instruction) {
    console.log('You wrote: ' + instruction + ' trying to run command.')
});
emitter.on('afterCommand', function() {
console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    process.stdout.write('Write "/version" or "/getOSinfo" "/lang" or "/exit" \n');

    if (input !== null) {
    	var instruction = input.toString().trim();
        emitter.emit('beforeCommand', instruction);
    	switch(instruction) {
    		case '/exit' :
    			process.stdout.write('Quitting app!\n');
            	process.exit();
    			break;

    		case '/version' :
    			console.log(process.versions);
    			break;

    		case '/lang' :
    			console.log(process.env);
    			break;

    		case '/getOSinfo' :
    			OSinfo.print();
    			break;

    		default :
    			process.stderr.write('Wrong command\n');
    			break;
    	}
        emitter.emit('afterCommand');
    }
});

*/
var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

/*
fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
}); */

/*fs.readFile('./test.txt', 'utf-8', function(err, data) {
    console.log(data);
});
fs.writeFile('./test.txt', 'Dodany tekst', function(err) {
    if (err) throw err;
    console.log('Zapisano!');
}); */

/*fs.readFile('./test.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./test.txt', '\nA tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./test.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
}); */

fs.readdir('../13.7', function(err, data){
    console.log(data);
    fs.writeFile('./test.txt', data, function(err){
        if (err) throw err;
        console.log('zapisane'.green);
    });
});