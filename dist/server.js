'use strict';

var _keystone = require('keystone');

var _keystone2 = _interopRequireDefault(_keystone);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

_keystone2.default.init({
	'name': 'Simple School',
	'brand': 'Simple School',
	'signin logo': '../images/logo.png',
	'admin path': 'admin',
	'favicon': 'assets/favicon.ico',
	'static': ['assets'],
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': process.env.COOKIE_SECRET
});
_keystone2.default.import('./models');
_keystone2.default.set('routes', function (app) {
	return app.get('/', function (req, res) {
		return res.redirect('/admin');
	});
});

_keystone2.default.start();
//# sourceMappingURL=server.js.map
