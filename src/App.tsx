import React from 'react';
import './App.scss';
import './styles/Layout.scss';
import Router from 'routes/Router';

const locationList = [
	{
		location: '내 위치',
		time: '인천광역시 연수구',
		tempInfo: { temperature: -2, lowestTemperature: -8, highestTemperature: 24 },
		explain: '대체로 청명함',
	},
];

function App() {
	return <Router />;
}

export default App;
