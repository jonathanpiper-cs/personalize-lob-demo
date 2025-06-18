import Contentstack, { type StackConfig } from '@contentstack/delivery-sdk';
import {
	CS_API_KEY,
	CS_DELIVERY_TOKEN,
	CS_ENVIRONMENT,
	CS_PREVIEW_HOST
	// CS_APP_HOST,
} from '$env/static/private';
import { PUBLIC_CS_PREVIEW_TOKEN } from '$env/static/public';

const stackConfig: StackConfig = {
	apiKey: CS_API_KEY,
	deliveryToken: CS_DELIVERY_TOKEN,
	environment: CS_ENVIRONMENT,
	live_preview: {
		enable: true,
		preview_token: PUBLIC_CS_PREVIEW_TOKEN,
		host: CS_PREVIEW_HOST
	}
};

export const Stack = Contentstack.stack(stackConfig);

export const addEditableTags = Contentstack.Utils.addEditableTags;
