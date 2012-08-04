# gitpull - git pull on directory

## USAGE

    var gitpull = require('gitpull')
    
    gitpull('directory', function (err) {
        console.log(err || 'OK')
    })

## INSTALLATION

Install via [npm](http://npmjs.org/):

    npm install gitpull

To install from source:

    git clone git://github.com/michaelnisi/gitpull.git 
    cd gitpull
    npm link

## LICENSE

[MIT License](https://raw.github.com/michaelnisi/gitpull/master/LICENSE)
