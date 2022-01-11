import React, { FC } from 'react';
import { ICollectionItem } from '../../types/shopTypes';
import CollectionItem from '../collection-item/CollectionItem.component';
import './PreviewCollection.styles.scss';

interface ICollectionPreviewProps {
	title: string;
	items: ICollectionItem[];
}

const PreviewCollection: FC<ICollectionPreviewProps> = ({ title, items }) => {
	return (
		<div className='collection-preview'>
			<h1 className='title'>{title}</h1>
			<div className='preview'>
				{items
					.filter((_, index) => index < 4)
					.map(({ id, ...otherItemProps }) => (
						<CollectionItem key={id} id={id} {...otherItemProps} />
					))}
			</div>
		</div>
	);
};

export default PreviewCollection;
