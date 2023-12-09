import Navbar from 'components/Navbar/Navbar';
import Header from 'components/Header/Header';
import React from 'react';
// import LoginPage from 'pages/Login/LoginPage';
import Card from 'components/Cards/LocationCard';

export default function HomePage() {
	return (
		<div className="all-wrapper">
			<Header type="logo" title="추가" />
			<div className="body-wrapper">
				HomePage입니다
				<Card />
			</div>
			<Navbar page="home" />
		</div>
	);
}
