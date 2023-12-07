import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/icon-navbar/home-light.png';
import locationIcon from '../../assets/icon-navbar/position-light.png';
import settingIcon from '../../assets/icon-navbar/setting-light.svg';
import homeHere from '../../assets/icon-navbar/home-here.png';
import locationHere from '../../assets/icon-navbar/position-here.png';
import settingHere from '../../assets/icon-navbar/setting-here.svg';

interface NavbarProps {
	page: 'home' | 'location' | 'setting';
}

const items = [
	{ title: '위치', page: 'location', link: '/location', icon: locationIcon, here: locationHere },
	{ title: '홈', page: 'home', link: '/', icon: homeIcon, here: homeHere },
	{ title: '설정', page: 'setting', link: '/setting', icon: settingIcon, here: settingHere },
];

export default function Navbar({ page }: NavbarProps) {
	return (
		<div className="navbar-container">
			{items.map((item, index) => (
				<Link to={item.link}>
					<div className={`nav-${index}`}>
						<img src={page === item.page ? item.here : item.icon} alt="icon" />
						<p>{item.title}</p>
					</div>
				</Link>
			))}
		</div>
	);
}
