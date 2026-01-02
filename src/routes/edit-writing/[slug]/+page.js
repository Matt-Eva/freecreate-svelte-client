import { error } from '@sveltejs/kit';
export const load = async ({ fetch, params }) => {
	if (params.slug) {
		return {
			writingUUID: params.slug
		};
	} else {
		error(404, 'not found');
	}
};
