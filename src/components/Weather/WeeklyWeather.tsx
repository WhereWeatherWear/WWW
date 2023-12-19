import React from 'react';
import Chatbot from 'components/Chatbot/Chatbot';
import DailyWeather, { DailyWeatherProps } from './DailyWeather';
import './WeeklyWeather.scss';

interface WeeklyWeatherListProps {
	weeklyWeatherList: Array<DailyWeatherProps>;
}
export default function WeeklyWeather({ weeklyWeatherList }: WeeklyWeatherListProps) {
	return (
		<div className="component-wrapper">
			<h2 className="page-inner-title">Weekly Weather</h2>
			<div className="list-wrapper">
				{weeklyWeatherList.map((dailyWeather) => (
					<DailyWeather
						key={`${dailyWeather.month}.${dailyWeather.date}`}
						month={dailyWeather.month}
						date={dailyWeather.date}
						day={dailyWeather.day}
						weatherInfo={dailyWeather.weatherInfo}
					/>
				))}
				<Chatbot />
			</div>
		</div>
	);
}
