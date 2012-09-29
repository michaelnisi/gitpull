# gitpull - git pull on directory

## USAGE

    var gitpull = require('gitpull')
    
    gitpull('directory', function (err, consoleOutput) {
        if (err) {
            console.error("Error:", consoleOutput);
        } else {
            console.log("Success!", consoleOutput);
        }
    });

## INSTALLATION

Install via [npm](http://npmjs.org/):

    npm install https://github.com/aadityabhatia/gitpull/tarball/master

## LICENSE

[MIT License](https://raw.github.com/michaelnisi/gitpull/master/LICENSE)

