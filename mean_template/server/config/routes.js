console.log('routes')
var user = require('../controllers/users.js');
module.exports = function(app){
	app.post('/login', user.login);
	app.get('/getmess', user.getmess)
}