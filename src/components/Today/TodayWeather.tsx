import React from 'react';
import TodayCard from './TodayCard';
import WhiteCard from './WhiteCard';
import '../Today/TodayWeather.scss';

const hourlyWeatherProps = {
	hourly: [
		{ time: '오전 12시', tempInfo: { temperature: 0 }, condition: '맑음' },
		{ time: '오전 1시', tempInfo: { temperature: -1 }, condition: '맑음' },
		{ time: '오전 2시', tempInfo: { temperature: -2 }, condition: '맑음' },
		{ time: '오전 3시', tempInfo: { temperature: -2 }, condition: '비' },
		{ time: '오전 4시', tempInfo: { temperature: -3 }, condition: '비' },
		{ time: '오전 5시', tempInfo: { temperature: -4 }, condition: '비' },
		{ time: '오전 6시', tempInfo: { temperature: -7 }, condition: '비' },
		{ time: '오전 7시', tempInfo: { temperature: -7 }, condition: '비' },
		{ time: '오전 8시', tempInfo: { temperature: -2 }, condition: '비' },
		{ time: '오전 9시', tempInfo: { temperature: 1 }, condition: '바람' },
		{ time: '오전 10시', tempInfo: { temperature: 1 }, condition: '바람' },
		{ time: '오전 11시', tempInfo: { temperature: 0 }, condition: '바람' },
		{ time: '오후 12시', tempInfo: { temperature: 0 }, condition: '바람' },
		{ time: '오후 1시', tempInfo: { temperature: 0 }, condition: '흐림' },
		{ time: '오후 2시', tempInfo: { temperature: 0 }, condition: '맑음' },
		{ time: '오후 3시', tempInfo: { temperature: 0 }, condition: '맑음' },
		{ time: '오후 4시', tempInfo: { temperature: 0 }, condition: '맑음' },
		{ time: '오후 5시', tempInfo: { temperature: 0 }, condition: '흐림' },
		{ time: '오후 6시', tempInfo: { temperature: 0 }, condition: '흐림' },
		{ time: '오후 7시', tempInfo: { temperature: 0 }, condition: '흐림' },
		{ time: '오후 8시', tempInfo: { temperature: 0 }, condition: '흐림' },
		{ time: '오후 9시', tempInfo: { temperature: 0 }, condition: '바람' },
		{ time: '오후 10시', tempInfo: { temperature: 0 }, condition: '흐림' },
		{ time: '오후 11시', tempInfo: { temperature: 0 }, condition: '흐림' },
	],
	explain: '오전에 비와 바람이 불고 오후에는 흐릴 예정입니다.',
};

const WhiteCardProps = {
	tempInfo: {
		feelTemperature: '-2',
	},
	precipitation: 0,
	uv: 5,
	humidity: 68,
};

export default function TodayWeather() {
	return (
		<div>
			<p>Today's Weather</p>
			<TodayCard hourlyWeather={hourlyWeatherProps.hourly} explain={hourlyWeatherProps.explain} />
			<section className="whiteCard-wrap">
				<WhiteCard
					title="체감 온도"
					tempInfo={{ feelTemperature: Number(WhiteCardProps.tempInfo.feelTemperature) }}
					precipitation={WhiteCardProps.precipitation}
					uv={WhiteCardProps.uv}
					humidity={WhiteCardProps.humidity}
				/>
				<WhiteCard
					title="강수량"
					tempInfo={{ feelTemperature: Number(WhiteCardProps.tempInfo.feelTemperature) }}
					precipitation={WhiteCardProps.precipitation}
					uv={WhiteCardProps.uv}
					humidity={WhiteCardProps.humidity}
				/>
				<WhiteCard
					title="자외선 지수"
					tempInfo={{ feelTemperature: Number(WhiteCardProps.tempInfo.feelTemperature) }}
					precipitation={WhiteCardProps.precipitation}
					uv={WhiteCardProps.uv}
					humidity={WhiteCardProps.humidity}
				/>
				<WhiteCard
					title="습도"
					tempInfo={{ feelTemperature: Number(WhiteCardProps.tempInfo.feelTemperature) }}
					precipitation={WhiteCardProps.precipitation}
					uv={WhiteCardProps.uv}
					humidity={WhiteCardProps.humidity}
				/>
			</section>
		</div>
	);
}
