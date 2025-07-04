export const load = async ({ fetch, params }) => {
	console.log('browser or server?');
	try {
		const res = await fetch('/api/hello');
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
