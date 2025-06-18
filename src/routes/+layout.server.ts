// import { getContent } from '$lib/contentstack.js';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({url}) => {
    const searchParams = url.searchParams;
    const livePreviewStatus = searchParams.get('live_preview') ? true : false
	return {
		livePreviewStatus
	};
};
