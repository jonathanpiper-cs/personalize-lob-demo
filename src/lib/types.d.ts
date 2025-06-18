/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Stack } from '@contentstack/delivery-sdk/dist/types/stack';
import Personalize from '@contentstack/personalize-edge-sdk';

interface Entry extends BaseEntry {
	[key: string]: string | undefined;
	uid: string;
	title: string;
	$?: any;
	modular_blocks?: IModularBlock[];
}

interface IModularBlock {
	cta?: ISimpleCTA;
	testimonial?: ITestimonial;
	columns?: IColumn;
}

interface ISimpleCTA {
	header: string;
	text: string;
	action: ILink;
}

interface ITestimonial {
	header: string;
	text: string;
	attribution: string;
	image: IAsset;
}

interface IColumn {
	column: [{ header: string; text: string }];
}

export interface ILandingPage extends Entry {
	uid: string;
	title: string;
	url: string;
	heading: string;
	body: string;
	banner: IAsset;
}

export interface IPage extends Entry {
	url: string;
	description: string;
	text: string;
	cta?: ICTA;
	department_specifics?: string;
	lob_specifics?: string;
}

export interface IAsset {
	uid: string;
	filename: string;
	url: string;
	title: string;
	dimension: {
		height: number;
		width: number;
	};
	_metadata: any;
}

export interface IQueryParams {
	locale?: string;
	contentType: string;
	queryParams?: KeyValuePair[];
	previewQuery?: LivePreviewQuery & ReleasePreviewQuery;
	includes?: string[];
	jsonRteFields?: string[];
	[index: string]: string | boolean | { key: string; value: string }[] | string[];
	[Personalize.VARIANT_QUERY_PARAM]: string;
}
export interface LivePreviewQuery {
	live_preview: string;
	content_type_uid: string;
	entry_uid: string;
}

export interface KeyValuePair {
	key: string;
	value: string | number | boolean;
}

export interface INavigation {
	link: ILink;
}

export interface ILink {
	title: string;
	href: string;
}

export interface IHeader {
	title: string;
	subtitle: string;
	navigation: INavigation[];
	$?: any;
}

interface IReference {
	uid: string;
	_content_type_uid: string;
}

export interface IGenre extends Entry {
	uid: string;
	title: string;
	url: string;
	summary: string;
	description: string;
	subgenre_of?: IReference[];
	$?: any;
}

export interface ICTA {
	title: string;
	text: string;
	image?: IAsset;
	link: ILink;
}
