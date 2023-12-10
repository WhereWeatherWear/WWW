import React from 'react';
import './LocationCard.scss';

export default function LocationCard() {
	return (
		<div>
			<div className="container">
				<section className="leftSection">
					<p className="location">충청북도 제천시</p>
					<p className="time">오후 10:58</p>
					<p className="weather">대체로 청명함</p>
				</section>
				<section className="rightSection">
					<h1 className="fector">-2°</h1>
					<p className="feelFector">체감 -6°</p>
				</section>
			</div>
		</div>
	);
}
