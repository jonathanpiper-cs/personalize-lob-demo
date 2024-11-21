import { getContent } from '$lib/contentstack.js';
import type { PageServerLoad } from './$types';
import type { IQueryParams } from '$lib/types';

export const load: PageServerLoad = async ({ url }) => {
	const parameters: IQueryParams = {
		contentType: 'page',
		queryParams: [{ key: 'url', value: url.pathname }],
	};
	url.searchParams.forEach((value, key) => {
	    parameters[key] = value;
	});
	const entries = await getContent(parameters);
	return {
		entry: entries[0]
	};
};
