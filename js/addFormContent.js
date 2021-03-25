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

	data.forEach(entry => {
		if (entry.id === user) {
			let currentCourse = entry.surveys.find(survey => survey.survey === course);
			currentCourse.answers = form;
			currentCourse.complete = true;

			// Stringify object to JSON
			const json = JSON.stringify(obj);
			// Add data to JSON file
			fs.writeFileSync('./js/data.json', json, (err) => {
				if (err) {
					console.log(err);
				};
			});
		}
	})
};

module.exports = { addFormContent }