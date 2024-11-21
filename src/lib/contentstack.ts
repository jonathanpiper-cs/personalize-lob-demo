import { Stack, addEditableTags } from '$lib/deliverySdk.js';
import Personalize from '@contentstack/personalize-edge-sdk';
import type { IQueryParams, IPage } from './types.js';
import { jsonToHtml } from '@contentstack/json-rte-serializer';

export const getContent = async (params: IQueryParams) => {
	const livePreviewStatus: boolean = Object.prototype.hasOwnProperty.call(params, 'live_preview');
	if (livePreviewStatus) {
		Stack.livePreviewQuery({
			live_preview: params.live_preview as string,
			contentTypeUid: params.content_type_uid as string,
			entryUid: params.entry_uid as string
		});
	}
	const variantParam = params[Personalize.VARIANT_QUERY_PARAM] as string;
	let entry = Stack.contentType(params.contentType).entry();
	if (variantParam) {
		const variantAlias = Personalize.variantParamToVariantAliases(variantParam).join(',');
		entry = entry.variants(variantAlias);
	}
	const entryQuery = entry.query();
	if (params.queryParams) {
		params.queryParams.forEach((param) => {
			entryQuery.equalTo(param.key, param.value);
		});
	}
	const data = await entryQuery.addParams({ include_applied_variants: 'true' }).find();
	const entries = data.entries as IPage[];
	if (entries && entries.length > 0) {
		entries.forEach((entry) => {
			if (livePreviewStatus) {
				addEditableTags(entry as IPage, params.contentType, true);
			} else {
				entry.$ = {};
			}
			if (params.jsonRteFields) {
				params.jsonRteFields.forEach((field) => {
					if (entry[field]) {
						entry[field] = jsonToHtml(entry[field]);
					}
				});
			}
		});
	}
	return entries;
};
