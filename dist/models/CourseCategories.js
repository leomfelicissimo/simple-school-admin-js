'use strict';

var _keystone = require('keystone');

var _keystone2 = _interopRequireDefault(_keystone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Types = _keystone2.default.Field.Types;

var CourseCategory = new _keystone2.default.List('CourseCategory', {
	autokey: { path: 'slug', from: 'name', unique: true },
	map: { name: 'name' },
	defaultSort: '-createdAt'
});

CourseCategory.add({
	name: { type: String, required: true },
	description: { type: String },
	createdAt: { type: Date, default: Date.now }
});

CourseCategory.register();
//# sourceMappingURL=CourseCategories.js.map
