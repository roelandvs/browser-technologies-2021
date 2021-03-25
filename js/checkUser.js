const fs = require('fs');

function createNewUser(studentId, studentName) {
	// Create new object for user
	const object = {
		id: studentId,
		name: studentName,
		surveys: [
			{
				survey: 'WAFS',
				complete: false,
			},
			{
				survey: 'CSSTTR',
				complete: false,
			},
			{
				survey: 'PWA',
				complete: false,
			},
			{
				survey: 'BT',
				complete: false,
			},
			{
				survey: 'RTW',
				complete: false,
			},
			{
				survey: 'HCD',
				complete: false,
			},
            {
				survey: 'MP',
				complete: false,
			}
		],
	};

	// Return object
	return object;
}

function checkUser(form, res) {
    const studentId = form.studentId;
    const studentName = form.name;
	let data = [];

    //copied from Ben: https://github.com/benl95/browser-technologies-2021/blob/master/data/helpers/authUser.js
	// Read data file
	const file = fs.readFileSync('./js/data.json', 'utf-8', (err) => {
		if (err) console.error(err);
	});

	// Convert JSON file to object
	const obj = JSON.parse(file);

	// Assign obj.users to data
	data = obj.users;

	// Check if user exists
	if (data.some((user) => user.id === studentId)) {
		// If user exists, redirect to home page
		return res.redirect(`/courses/${studentId}`);
	} else {
		// Create new user object
		const newUser = createNewUser(studentId, studentName);
		// Push newUser object into obj
		obj.users.push(newUser);
		// Stringify object to JSON
		const json = JSON.stringify(obj);
		// Add data to JSON file
		fs.writeFileSync('./js/data.json', json, (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('User created');
			}
		});
		return res.redirect(`/courses/${studentId}`);
	}
};

module.exports = { checkUser };