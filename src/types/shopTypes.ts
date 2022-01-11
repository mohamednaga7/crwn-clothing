export interface ICollectionItem {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
}

export interface ICollection {
	id: number;
	title: string;
	routeName: string;
	items: ICollectionItem[];
}

export interface ISection {
	title: string;
	imageUrl: string;
	id: number;
	size?: string;
	linkUrl: string;
}
