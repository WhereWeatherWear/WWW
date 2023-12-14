import React, { useState } from 'react';
import './DailyWeather.scss';
import sunny from '../../assets/weather/sunny.png';
import clody from '../../assets/weather/cloudy.png';
import windy from '../../assets/weather/windy.png';
import snow from '../../assets/weather/snow.png';
import rainy from '../../assets/weather/rainy.png';
import downArrow from '../../assets/down-arrow.svg';
import divideLine from '../../assets/line.png';

export interface DailyWeatherProps {
	month: number;
	date: number;
	day: string;
	weatherInfo: {
		dayAndNight: {
			day: string;
			night: string;
		};
		lowAndHigh: {
			lowestTemperature: number;
			highestTemperature: number;
		};
		POP: number; // 강수확률
		sunrise: string; // 일출
		sunset: string; // 일몰
		humidity: number; // 습도
		windChill: number; // 체감온도
		wind: string; // 바람
	};
}

const getWeatherIcon = (condition: string): string => {
	switch (condition) {
		case '맑음':
			return sunny;
		case '흐림':
			return clody;
		case '비':
			return rainy;
		case '눈':
			return snow;
		case '바람':
			return windy;
		default:
			return '';
	}
};

export default function DailyWeather({ month, date, day, weatherInfo }: DailyWeatherProps) {
	const dayIcon = getWeatherIcon(weatherInfo.dayAndNight.day);
	const nightIcon = getWeatherIcon(weatherInfo.dayAndNight.night);
	const [isOpen, setIsOpen] = useState(false);

	const showMoreInfo = () => {
		setIsOpen(!isOpen);
	};

	// if (isOpen) {
	// 	console.log(true);
	// } else {
	// 	console.log(false);
	// }

	return (
		<>
			<div className="daily-wrapper">
				<div className="day-info">
					<span className="day">{day}</span>
					<span className="date">
						{month}/{date}
					</span>
				</div>
				<div className="weather-info">
					<p className="icons">
						<img src={dayIcon} alt="day icon" />
						<img src={divideLine} alt="divide line" className="divide-line" />
						<img src={nightIcon} alt="night icon" />
					</p>
					<p className="temps">
						<span className="day">{weatherInfo.lowAndHigh.lowestTemperature}°</span>
						<span className="night">{weatherInfo.lowAndHigh.highestTemperature}°</span>
					</p>
					<p className="more-btn" onClick={() => showMoreInfo()} role="presentation">
						<img
							src={downArrow}
							style={isOpen === false ? { transform: 'rotate(0deg)' } : { transform: 'rotate(180deg)' }}
							alt="더보기 버튼"
						/>
					</p>
				</div>
			</div>
			{isOpen && <div>상세정보</div>}
		</>
	);
}
