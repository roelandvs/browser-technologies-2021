const fs = require('fs');

function checkCourses(user) {
    // Read data file
	const file = fs.readFileSync('./js/data.json', 'utf-8', (err) => {
		if (err) console.error(err);
	});
	// Convert JSON file to object
	const obj = JSON.parse(file);
	// Assign obj.users to data
	data = obj.users;

    return data.map(student => {
		if (student.id === user) {
			return student.surveys
		}
	}).filter(entry => entry !== undefined);
};

module.exports = { checkCourses };