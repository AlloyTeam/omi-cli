var spawn = require('cross-spawn');
var ora = require('ora');
var which = require('which');

module.exports = function (mirror, done){
    var registry, resolved, pkgtool = 'npm';
    if (mirror.toLowerCase() === 'yarn') {
        try {
            resolved = which.sync('yarn');
            if(resolved) pkgtool = 'yarn';
        } catch (e) {
            console.log(e);
            return secede(spawn(pkgtool, ['install'], { stdio: 'inherit'}));
        }
    } else if(mirror.toLowerCase() === 'cnpm') {
        try{
            resolved = which.sync('cnpm');
            if(resolved) pkgtool = 'cnpm';
        } catch (e) {
            console.log(e);
            return secede(spawn(pkgtool, ['install'], { stdio: 'inherit'}));
        }
    } else if(mirror !== 'default'){
        registry = ['--registry', require('./mirror')[mirror]];
    }
    return secede(spawn(pkgtool, registry ? [].concat(['install'], registry) : ['install'], { stdio: 'inherit'}));
};

function secede(line){
    line.on('close', function(code){
        process.exit(code)
    });

    line.on('error', function (reason) {
        console.log('An error occured while executing the NPM command.', reason);
    });
}