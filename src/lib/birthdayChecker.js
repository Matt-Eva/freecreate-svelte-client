function birthdayChecker(day, month, year) {
	const errors = {
		year: '',
		month: '',
		day: ''
	};

	const numberYear = parseInt(year);
	if (Number.isNaN(numberYear)) {
		const error = new Error('please enter a valid year');
		errors.year = error;
	} else {
		const currentDate = new Date();
		const currentYear = currentDate.getFullYear();
		if (numberYear < 1900 || numberYear > currentYear) {
			const error = new Error('please enter a valid year');
			errors.year = error;
		}
	}

	const minDays = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'17',
		'18',
		'19',
		'20',
		'21',
		'22',
		'23',
		'24',
		'25',
		'26',
		'27',
		'28'
	];
	const midDays = minDays.concat(['29', '30']);
	const maxDays = midDays.concat(['31']);

	const months = {
		1: maxDays,
		2: minDays,
		3: maxDays,
		4: midDays,
		5: maxDays,
		6: midDays,
		7: maxDays,
		8: maxDays,
		9: midDays,
		10: maxDays,
		11: midDays,
		12: maxDays
	};

	const days = months[month];
	if (days) {
		const foundDay = days.find((d) => d === day);
		if (!foundDay) {
			const error = new Error('please enter a valid day');
			errors.day = error;
		}
	} else {
		const e = new Error('please enter a valid month');
		errors.month = e;
		const foundDay = maxDays.find((d) => d === day);
		if (!foundDay) {
			const e = new Error('please enter a valid day');
			errors.day = e;
		}
	}

	for (const key in errors) {
		if (errors[key] !== '') {
			throw errors;
		}
	}
}

export default birthdayChecker;
