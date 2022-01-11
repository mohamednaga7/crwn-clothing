import React, { FC } from 'react';
import { ICollectionItem } from '../../types/shopTypes';
import './CollectionItem.styles.scss';

const CollectionItem: FC<ICollectionItem> = ({ id, name, price, imageUrl }) => {
	return (
		<div className='collection-item'>
			<div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collecion-footer'>
				<div className='name'>{name}</div>
				<div className='price'>{price}</div>
			</div>
		</div>
	);
};

export default CollectionItem;
