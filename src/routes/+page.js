export const load = async ({ fetch, params }) => {
	try {
		const res = await fetch('/api/hello');
		if (res.ok) {
			const data = await res.json();
			console.log(data);
		} else {
			const error = await res.json();
			console.error(e);
		}
	} catch (e) {
		console.error(e);
	}
};
