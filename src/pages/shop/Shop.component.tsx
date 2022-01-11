import React, { useState } from 'react';
import PreviewCollection from '../../components/preview-collection/PreviewCollection.component';
import { ICollection } from '../../types/shopTypes';
import { SHOP_DATA } from './shop.data';

const ShopPage = () => {
	const [collections, setCollections] = useState<ICollection[]>(SHOP_DATA);
	return (
		<div className='shop-page'>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<PreviewCollection key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

export default ShopPage;
