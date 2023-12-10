import Navbar from 'components/Navbar/Navbar';
import Header from 'components/Header/Header';
import React from 'react';
// import LoginPage from 'pages/Login/LoginPage';
import LocationCard from 'components/Cards/LocationCard';

const CardProps = {
	location: '충청북도 제천시',
	time: '오후 10:58',
	tempInfo: {
		temperature: 22,
		feelTemperature: '20°C',
	},
	explain: '대체로 청명함',
};

export default function HomePage() {
	return (
		<div className="all-wrapper">
			<Header type="logo" title="추가" />
			<div className="body-wrapper">
				<p className="where">Where I am</p>
				<LocationCard
					location={CardProps.location}
					time={CardProps.time}
					explain={CardProps.explain}
					tempInfo={CardProps.tempInfo}
				/>
			</div>
			<Navbar page="home" />
		</div>
	);
}
