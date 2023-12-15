import React from 'react';
import './WhiteCard.scss';

export interface WhiteCardProps {
	tempInfo: {
		feelTemperature: number;
	};
	precipitation: number;
	uv: number;
	humidity: number;
	title: string;
}

export default function WhiteCard({ tempInfo, precipitation, uv, humidity, title }: WhiteCardProps) {
	let value;
	switch (title) {
		case '체감 온도':
			value = `${tempInfo?.feelTemperature ?? 'N/A'}°`;
			break;
		case '강수량':
			value = `${precipitation}mm`;
			break;
		case '자외선 지수':
			value = uv;
			break;
		case '습도':
			value = `${humidity}%`;
			break;
		default:
			return null;
	}

	return (
		<section className="white-wrap">
			<div className="whiteContainer">
				<p>{title}</p>
				<p>{value}</p>
			</div>
		</section>
	);
}
