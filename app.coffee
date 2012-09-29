module.exports = (path, callback) ->
	exec = require('child_process').exec
	exec 'git pull', { cwd: path }, (error, stdout, stderr) ->
		if error then return callback error, stderr.trim()
		callback null, stdout.trim()

