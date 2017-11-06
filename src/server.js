import keystone from 'keystone';
import dotenv from 'dotenv';
dotenv.config();

keystone.init({
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
	'cookie secret': process.env.COOKIE_SECRET,
});
keystone.import('./models');
keystone.set('routes', app => app.get('/', (req, res) => res.redirect('/admin')));

keystone.start();
