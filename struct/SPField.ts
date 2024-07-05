export interface __metadata {
	id: string;
	uri: string;
	type: string;
}

export interface __deferred {
	uri: string;
}

export interface DescriptionResource {
	__deferred: __deferred;
}

export interface __deferred {
	uri: string;
}

export interface TitleResource {
	__deferred: __deferred;
}

export interface RootObject {
	__metadata: __metadata;
	descriptionResource: DescriptionResource;
	titleResource: TitleResource;
	autoindexed: boolean;
	canBeDeleted: boolean;
	clientSideComponentid: string;
	clientSideComponentProperties?: any;
	clientValidationFormula?: any;
	clientValidationMessage?: any;
	customFormatter?: any;
	defaultFormula?: any;
	defaultValue?: any;
	description: string;
	direction: string;
	enforceUniqueValues: boolean;
	entityPropertyName: string;
	filterable: boolean;
	fromBaseType: boolean;
	group: string;
	hidden: boolean;
	id: string;
	indexed: boolean;
	indexStatus: number;
	internalName: string;
	isModern: boolean;
	jSLink?: any;
	pinnedToFiltersPane: boolean;
	readOnlyField: boolean;
	required: boolean;
	schemaXml: string;
	scope: string;
	sealed: boolean;
	showInFiltersPane: number;
	sortable: boolean;
	staticName: string;
	title: string;
	fieldTypeKind: number;
	typeAsString: string;
	typeDisplayName: string;
	TypeShortdescription: string;
	validationFormula?: any;
	validationMessage?: any;
}