export const load = async ({ fetch, parent }) => {
	const data = await parent();
	const apiBase = data.props.apiBase;
	try {
		const time = Date.now();
		console.log(time);
		const res = await fetch(apiBase + '/user-creators', { credentials: 'include' });
		if (res.ok) {
			const data = await res.json();
			console.log(data);
		}
	} catch (error) {
		console.error(error);
	}
};
