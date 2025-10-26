function dateChecker(day, month, year) {
	const errors = [];

	const numberYear = parseInt(year);
	if (Number.isNaN(numberYear)) {
		const error = new Error('please enter a valid year');
		errors.push(error);
	} else {
		const currentDate = new Date();
		const currentYear = currentDate.getFullYear();
		if (numberYear < 1900 || numberYear > currentYear) {
			const e = new Error('please enter a valid year');
			errors.push(e);
		}
	}

	const minDays = [
		'01',
		'02',
		'03',
		'04',
		'05',
		'06',
		'07',
		'08',
		'09',
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
		'01': maxDays,
		'02': minDays,
		'03': maxDays,
		'04': midDays,
		'05': maxDays,
		'06': midDays,
		'07': maxDays,
		'08': maxDays,
		'09': midDays,
		10: maxDays,
		11: midDays,
		12: maxDays
	};

	const days = months[month];
	if (days) {
		const foundDay = days.find((d) => d === day);
		if (!foundDay) {
			const e = new Error('please enter a valid day');
			errors.push(e);
		}
	} else {
		const e = new Error('please enter a valid month');
		errors.push(e);
		const foundDay = maxDays.find((d) => d === day);
		if (!foundDay) {
			const e = new Error('please enter a valid day');
			errors.push(e);
		}
	}

	if (errors.length > 0) {
		throw errors;
	}

	return `${month}-${day}-${year}`;
}

export default dateChecker;
