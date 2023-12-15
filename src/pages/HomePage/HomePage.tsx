import Navbar from 'components/Navbar/Navbar';
import Header from 'components/Header/Header';
import React from 'react';
// import LoginPage from 'pages/Login/LoginPage';
import LocationCard from 'components/Cards/LocationCard';
import TodayWeather from 'components/Today/TodayWeather';
import WeeklyWeather from 'components/Weather/WeeklyWeather';

const CardProps = {
	location: '충청북도 제천시',
	time: '오후 10:58',
	tempInfo: {
		temperature: 22,
		feelTemperature: '20',
	},
	explain: '대체로 청명함',
};

const weeklyWeatherList = [
	{
		month: 12,
		date: 11,
		day: '월',
		weatherInfo: {
			dayAndNight: {
				day: '눈',
				night: '맑음',
			},
			lowAndHigh: {
				lowestTemperature: -3,
				highestTemperature: 4,
			},
			POP: 5,
			sunrise: '오전 7:27',
			sunset: '오후 5:15',
			humidity: 5,
			windChill: -7,
			wind: '3m/s 북북서',
		},
	},
	{
		month: 12,
		date: 12,
		day: '화',
		weatherInfo: {
			dayAndNight: {
				day: '바람',
				night: '비',
			},
			lowAndHigh: {
				lowestTemperature: -5,
				highestTemperature: 14,
			},
			POP: 5,
			sunrise: '오전 7:27',
			sunset: '오후 5:15',
			humidity: 5,
			windChill: -7,
			wind: '3m/s 북북서',
		},
	},
	{
		month: 12,
		date: 13,
		day: '수',
		weatherInfo: {
			dayAndNight: {
				day: '흐림',
				night: '맑음',
			},
			lowAndHigh: {
				lowestTemperature: -3,
				highestTemperature: -1,
			},
			POP: 5,
			sunrise: '오전 7:27',
			sunset: '오후 5:15',
			humidity: 5,
			windChill: -7,
			wind: '3m/s 북북서',
		},
	},
	{
		month: 12,
		date: 14,
		day: '목',
		weatherInfo: {
			dayAndNight: {
				day: '비',
				night: '눈',
			},
			lowAndHigh: {
				lowestTemperature: -10,
				highestTemperature: 1,
			},
			POP: 60,
			sunrise: '오전 7:24',
			sunset: '오후 5:13',
			humidity: 63,
			windChill: -14,
			wind: '5m/s 북북서',
		},
	},
	{
		month: 12,
		date: 15,
		day: '금',
		weatherInfo: {
			dayAndNight: {
				day: '바람',
				night: '흐림',
			},
			lowAndHigh: {
				lowestTemperature: -20,
				highestTemperature: -14,
			},
			POP: 60,
			sunrise: '오전 7:24',
			sunset: '오후 5:13',
			humidity: 63,
			windChill: -14,
			wind: '5m/s 북북서',
		},
	},
];

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

				<TodayWeather />
				<WeeklyWeather weeklyWeatherList={weeklyWeatherList} />
			</div>
			<Navbar page="home" />
		</div>
	);
}
