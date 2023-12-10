import React from 'react';
import './LocationCard.scss';

export interface LocationProps {
	location: string;
	time: string;
	tempInfo: {
		temperature: number;
		lowestTemperature: number;
		highestTemperature: number;
	};
	explain: string;
}

export default function LocationCard({ location, time, tempInfo, explain }: LocationProps) {
	return (
		<div className="card-wrapper">
			<div className="lte">
				<p className="l">{location}</p>
				<p className="t">{time}</p>
				<p className="e">{explain}</p>
			</div>
			<div className="tlh">
				<p className="t">{tempInfo.temperature}°</p>
				<div className="lh">
					<p className="l">최저: {tempInfo.lowestTemperature}°</p>
					<p className="h">최고: {tempInfo.highestTemperature}°</p>
				</div>
			</div>
		</div>
	);
}
