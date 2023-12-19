import React, { useState } from 'react';
import './DailyWeather.scss';
import sunny from '../../assets/weather/sunny.png';
import clody from '../../assets/weather/cloudy.png';
import windy from '../../assets/weather/windy.png';
import snow from '../../assets/weather/snow.png';
import rainy from '../../assets/weather/rainy.png';
import downArrow from '../../assets/down-arrow.svg';
import divideLine from '../../assets/line.png';

import POP from '../../assets/weather/intense-rain.png';
import sunrise from '../../assets/weather/sunrise.png';
import sunset from '../../assets/weather/sundown.png';
import humidity from '../../assets/weather/precipitation.png';
import chill from '../../assets/weather/chill.png';
import clothes from '../../assets/clothes/clothes.jpg';

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
						<p className="day">{weatherInfo.lowAndHigh.lowestTemperature}°</p>
						<p className="night">{weatherInfo.lowAndHigh.highestTemperature}°</p>
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
			{isOpen && (
				<>
					<div className="more-info">
						<div className="info-items">
							<img src={POP} alt="POP" />
							<p>
								<span className="items-title">강수확률</span>
								<span>{weatherInfo.POP}%</span>
							</p>
						</div>
						<div className="info-items">
							<img src={sunrise} alt="sunrise" />
							<p>
								<span className="items-title">일출</span>
								<span>{weatherInfo.sunrise}</span>
							</p>
						</div>
						<div className="info-items">
							<img src={sunset} alt="sunset" />
							<p>
								<span className="items-title">일몰</span>
								<span>{weatherInfo.sunset}</span>
							</p>
						</div>
						<div className="info-items">
							<img src={humidity} alt="humidity" />
							<p>
								<span className="items-title">습도</span>
								<span>{weatherInfo.humidity}%</span>
							</p>
						</div>
						<div className="info-items">
							<img src={windy} alt="wind" />
							<p>
								<span className="items-title">바람</span>
								<span>{weatherInfo.wind}</span>
							</p>
						</div>
						<div className="info-items">
							<img src={chill} alt="wind chill" />
							<p>
								<span className="items-title">체감 온도</span>
								<span>{weatherInfo.windChill}°</span>
							</p>
						</div>
					</div>
					<div className="clothes-info">
						<h3>추천 옷차림</h3>
						<img src={clothes} alt="clothes" />
					</div>
				</>
			)}
		</>
	);
}
