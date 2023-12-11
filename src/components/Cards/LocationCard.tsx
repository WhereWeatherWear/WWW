import React from 'react';
import './LocationCard.scss';

interface LocationProps {
	location: string;
	time: string;
	tempInfo: {
		temperature: number;
		feelTemperature: string | number;
	};
	explain: string;
}

export default function LocationCard({ location, time, explain, tempInfo }: LocationProps) {
	return (
		<div>
			<div className="containerWrap">
				<section className="leftSection">
					<p className="location">{location}</p>
					<p className="time">{time}</p>
					<p className="weather">{explain}</p>
				</section>
				<section className="rightSection">
					<h1 className="fector">{tempInfo.temperature}°</h1>
					<p className="feelFector">체감 {tempInfo.feelTemperature}°</p>
				</section>
			</div>
		</div>
	);
}
