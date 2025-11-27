export const load = async ({ fetch, parent }) => {
	const data = await parent();
	const apiBase = data.props.apiBase;
	try {
		const res = await fetch(apiBase + '/user-creators');
		if (res.ok) {
			const data = await res.json();
			console.log(data);
		}
	} catch (error) {
		console.error(error);
	}
};
