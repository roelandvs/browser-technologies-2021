const fs = require('fs');

function addFormContent(form, res, course, user) {
    let data = [];

    // Read data file
	const file = fs.readFileSync('./js/data.json', 'utf-8', (err) => {
		if (err) console.error(err);
	});

	// Convert JSON file to object
	const obj = JSON.parse(file);

    // Assign obj.users to data
	data = obj.users;

    console.log(course, user);
};

module.exports = { addFormContent }