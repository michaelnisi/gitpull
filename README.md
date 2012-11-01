# gitpull - incorporate changes from a remote repository into the current branch

## Usage

### Stream

    var gitpull = require('../index.js')

    gitpull('.')
      .on('error', function (err) {
        console.error(error.message)
      })
      .on('end', function () {
        console.log('OK')
      })

### Callback
    
    var gitpull = require('../index.js')

    gitpull('.', function (err) {
      err ? console.error(err.message) : console.log('OK')  
    })

## Installation

install via [npm](http://npmjs.org/):

    npm install gitpull

## License

[MIT License](https://raw.github.com/michaelnisi/gitpull/master/LICENSE)
