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

	data.forEach(student => {
		if (student.id === user) {
			let currentCourse = student.surveys.find(courses => courses.survey === course);
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

			res.redirect(`/courses/${user}`);
		}
	})
};

module.exports = { addFormContent }