import React from 'react';
import './MenuItem.styles.scss';

interface MenuItemProps {
	title: string;
	imageUrl: string;
	size?: string;
	linkUrl: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, imageUrl, size }) => {
	return (
		<div className={`menu-item ${size}`}>
			<div
				className='background-image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className='content'>
				<h1 className='title'>{title}</h1>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
