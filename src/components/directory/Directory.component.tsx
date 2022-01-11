import React, { FC, useState } from 'react';
import MenuItem from '../menu-item/MenuItem.component';
import './Directory.styles.scss';

interface IDirectoryProps {}

interface ISection {
	title: string;
	imageUrl: string;
	id: number;
	size?: string;
	linkUrl: string;
}

const Directory: FC<IDirectoryProps> = () => {
	const [sections, setSections] = useState<ISection[]>([
		{
			title: 'hats',
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
			id: 1,
			linkUrl: 'shop/hats',
		},
		{
			title: 'jackets',
			imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
			id: 2,
			linkUrl: 'shop/jackets',
		},
		{
			title: 'sneakers',
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			id: 3,
			linkUrl: 'shop/sneakers',
		},
		{
			title: 'womens',
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
			size: 'large',
			id: 4,
			linkUrl: 'shop/womens',
		},
		{
			title: 'mens',
			imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
			size: 'large',
			id: 5,
			linkUrl: 'shop/mens',
		},
	]);

	return (
		<div className='directory-menu'>
			{sections.map(({ id, title, imageUrl, size, linkUrl }) => (
				<MenuItem
					title={title}
					key={id}
					imageUrl={imageUrl}
					size={size}
					linkUrl={linkUrl}
				/>
			))}
		</div>
	);
};

export default Directory;
