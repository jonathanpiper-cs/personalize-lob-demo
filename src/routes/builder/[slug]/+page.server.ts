import { getContent } from '$lib/contentstack.js';
import type { IQueryParams } from '$lib/types';
import type { PageServerLoad } from '../../$types';

export const load: PageServerLoad = async ({ url }) => {
    const parameters: IQueryParams = {
        contentType: 'page_builder',
        queryParams: [{ key: 'url', value: url.pathname.split('/')[-1] }],
    };
    url.searchParams.forEach((value, key) => {
        parameters[key] = value;
    });
    const entries = await getContent(parameters);
    return {
        entry: entries[0]
    };
}