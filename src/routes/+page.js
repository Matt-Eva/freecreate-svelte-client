export const load = async ({ fetch, parent }) => {
	const data = await parent();
	const apiBase = data.props.apiBase;
	console.log(apiBase);

	try {
		const res = await fetch(apiBase + '/hello');
		if (res.ok) {
			const data = await res.json();
			console.log(data);
		} else {
			const error = await res.json();
			console.error(error);
		}
	} catch (error) {
		console.error(error);
	}
};
