import Keystone from 'keystone';
const Types = Keystone.Field.Types;

const CourseCategory = new Keystone.List('CourseCategory', {
	autokey: { path: 'slug', from: 'name', unique: true },
	map: { name: 'name' },
	defaultSort: '-createdAt'
});

CourseCategory.add({
	name: { type: String, required: true },
	description: { type: String },
	createdAt: { type: Date, default: Date.now },
})

CourseCategory.register();
