import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
	return (
		<div className='header'>
			<Link to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<NavLink
					className={(navData: { isActive: boolean }) =>
						`${navData.isActive ? 'active' : ''} option`
					}
					to='/shop'
				>
					SHOP
				</NavLink>
				<NavLink
					className={(navData: { isActive: boolean }) =>
						`${navData.isActive ? 'active' : ''} option`
					}
					to='/contact'
				>
					CONTACT
				</NavLink>
			</div>
		</div>
	);
};

export default Header;
