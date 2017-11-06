import keystone  from 'keystone';
const User = keystone.list('User');

exports = module.exports = done => {
	new User.model({
			name: { first: 'Admin', last: 'User' },
			email: 'admin@admin.com',
			password: 'admin',
			canAccessKeystone: true,
			isAdmin: true,
	}).save(done);
};
