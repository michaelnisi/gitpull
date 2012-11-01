var Stream = require('stream').Stream
  , spawn = require('child_process').spawn
  
module.exports = function (path, callback) {
  var ps = spawn('git', ['pull'], { cwd: path })
    , stream = new Stream()
    , error

  stream.readable = true
  stream.writable = false

  ps.on('exit', function (code) {
    if (!!code) {
      error = new Error(code)
      stream.emit('error', error)
    }
    
    ps.kill()
  })

  ps.on('close', function () {
    stream.emit('end')
    if (callback) {
      callback(error)
    }
  })

  ps.stdout.on('data', function (data) {
    stream.emit('data', data)
  })

  ps.stderr.on('data', function (data) {
    stream.emit('error', new Error(data))
  })

  return stream
}
