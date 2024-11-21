// import { getContent } from '$lib/contentstack.js';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({url}) => {
    const searchParams = url.searchParams;
    const livePreviewStatus = Object.prototype.hasOwnProperty.call(searchParams, 'live_preview')
	// const headerParameters = {
	// 	contentType: 'header',
    //     singleton: true
	// };
	// // console.log(Stack.config.live_preview)
	// const header = await getContent(headerParameters);
	return {
		livePreviewStatus
	};
};
