module.exports = gitpull

var spawn = require('child_process').spawn

function gitpull (path, callback) {
  var ps = spawn('git', ['pull'], { cwd: path })

  ps.on('exit', function (code) {
    callback(code === 0 ? null : new Error(code))
    ps.kill()
  })
  
  ps.stdout.on('data', function (data) {
    console.log('stdout %s', data)
  })

  ps.stderr.on('data', function (data) {
    console.error('stderr %s', data)
  })

  return ps
}
