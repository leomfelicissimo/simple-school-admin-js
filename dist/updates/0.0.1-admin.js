'use strict';

var _keystone = require('keystone');

var _keystone2 = _interopRequireDefault(_keystone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _keystone2.default.list('User');

exports = module.exports = function (done) {
		new User.model({
				name: { first: 'Admin', last: 'User' },
				email: 'admin@admin.com',
				password: 'admin',
				canAccessKeystone: true,
				isAdmin: true
		}).save(done);
};
//# sourceMappingURL=0.0.1-admin.js.map
