import Personalize from '@contentstack/personalize-edge-sdk';
import {
	PUBLIC_CS_PERSONALIZE_PROJECT_UID,
	PUBLIC_CS_PERSONALIZE_EDGE_API_URL
} from '$env/static/public';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// Set Personalize Edge URL
	if (PUBLIC_CS_PERSONALIZE_EDGE_API_URL) {
		Personalize.setEdgeApiUrl(PUBLIC_CS_PERSONALIZE_EDGE_API_URL);
	}
	// Initialize Personalize SDK
    const pSdk = await Personalize.init(PUBLIC_CS_PERSONALIZE_PROJECT_UID as string, { request: event.request });
    console.log(pSdk)
	const variants = pSdk?.getVariants();
	console.log(variants);
	// Get the variant parameter from the URL
	const variantParam = pSdk?.getVariantParam();
	// Create a new URL object
	console.log('+hooks.server.ts || The variant param is:', variantParam);
	const parsedUrl = new URL(event.url);
	// Add the variant parameter to the parsedURL object
	parsedUrl.searchParams.set(Personalize.VARIANT_QUERY_PARAM, variantParam || "");
	// Console log the parsed URL href for debugging
	console.log('+hooks.server.ts || The parsed URL is:', parsedUrl.href);
	// Set the original URL in the event object using the parsed URL
	event.url = parsedUrl;
	// Resolve the event object
	const response = await resolve(event);
	// Add the Personalize state to the response
	pSdk?.addStateToResponse(response);
	response.headers.set('cache-control', 'no-store');
	return response;
};
