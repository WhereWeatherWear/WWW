import React from 'react';
import './TodayCard.scss';
import clody from '../../assets/weather/cloudy-dark.png';
import windy from '../../assets/weather/windy-dark.png';
import snow from '../../assets/weather/snow-dark.png';
import rainy from '../../assets/weather/rainy-dark.png';
import sunny from '../../assets/weather/sunny-dark.png';

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

export interface HourlyWeatherInfo {
	time: string;
	tempInfo: {
		temperature: number;
	};
	condition: string;
}

export interface TodayCardProps {
	hourlyWeather: HourlyWeatherInfo[];
	explain: string;
}

export default function TodayCard({ hourlyWeather, explain }: TodayCardProps) {
	return (
		<div className="today-container">
			<p className="today-explain">{explain}</p>
			<section className="hour-section">
				{hourlyWeather.map((hour, index) => (
					// eslint-disable-next-line react/no-array-index-key
					<div className="hour-box" key={index}>
						<img src={getWeatherIcon(hour.condition)} alt="hourly icon" />
						<p className="temp">{hour.tempInfo.temperature}°</p>
						<p className="time">{hour.time}</p>
					</div>
				))}
			</section>
		</div>
	);
}
