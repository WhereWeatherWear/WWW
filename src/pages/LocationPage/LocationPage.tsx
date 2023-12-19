import Header from 'components/Header/Header';
import LocationCardList from 'components/Location/LocationCardList';
import Navbar from 'components/Navbar/Navbar';
import React from 'react';

const locationList = [
	{
		location: '내 위치',
		time: '인천광역시 연수구',
		tempInfo: { temperature: -2, lowestTemperature: -8, highestTemperature: 24 },
		explain: '대체로 청명함',
	},
	{
		location: '송파구',
		time: '오후 9:44',
		tempInfo: { temperature: 0, lowestTemperature: -8, highestTemperature: 24 },
		explain: '대체로 청명함',
	},
];

export default function LocationPage() {
	return (
		<div className="all-wrapper">
			<div className="header-wrapper">
				<Header type="location" title="위치" />
			</div>
			<div className="body-wrapper list-wrapper">
				<LocationCardList locationList={locationList} />
			</div>
			<div className="navbar-wrapper">
				<Navbar page="location" />
			</div>
		</div>
	);
}
