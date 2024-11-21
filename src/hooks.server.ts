import Personalize from '@contentstack/personalize-edge-sdk';
import {
	PUBLIC_CS_PERSONALIZE_PROJECT_UID,
	PUBLIC_CS_PERSONALIZE_EDGE_API_URL
} from '$env/static/public';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// Set Personalize Edge URL
	Personalize.reset();
	if (PUBLIC_CS_PERSONALIZE_EDGE_API_URL) {
		Personalize.setEdgeApiUrl(PUBLIC_CS_PERSONALIZE_EDGE_API_URL);
	}
	// Initialize Personalize SDK
	if (Personalize.getInitializationStatus() !== 'success') {
		console.log('+hooks.server.ts || Initializing Personalize SDK');
		await Personalize.init(PUBLIC_CS_PERSONALIZE_PROJECT_UID as string, { request: event.request });
	}
	// Get the variant parameter from the URL
	const variantParam = Personalize.getVariantParam();
	// Create a new URL object
	const parsedUrl = new URL(event.url);
	// Add the variant parameter to the parsedURL object
	parsedUrl.searchParams.set(Personalize.VARIANT_QUERY_PARAM, variantParam);
	// Console log the parsed URL href for debugging
	console.log('+hooks.server.ts || The parsed URL is:', parsedUrl.href);
	// Set the original URL in the event object using the parsed URL
	event.url = parsedUrl;
	// Resolve the event object
	const response = await resolve(event);
	// Add the Personalize state to the response
	await Personalize.addStateToResponse(response);
	response.headers.set('cache-control', 'no-store');
	return response;
};
