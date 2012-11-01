var gitpull = require('../index.js')

gitpull('.')
  .on('error', function (error) {
    console.error(error.message)
  })
  .on('end', function () {
    console.log('OK')
  })
  .pipe(process.stdout)
