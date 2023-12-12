import Navbar from 'components/Navbar/Navbar';
import Header from 'components/Header/Header';
import React from 'react';
// import LoginPage from 'pages/Login/LoginPage';
import LocationCard from 'components/Cards/LocationCard';
import WhiteCard from 'components/Today/WhiteCard';
import './HomePage.scss';

const CardProps = {
	location: '충청북도 제천시',
	time: '오후 10:58',
	tempInfo: {
		temperature: 22,
		feelTemperature: '20',
	},
	explain: '대체로 청명함',
};

const WhiteCardProps = {
	tempInfo: {
		feelTemperature: '-2',
	},
	precipitation: 0,
	uv: 5,
	humidity: 68,
};

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
				<section className="WhiteContainer">
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
			<Navbar page="home" />
		</div>
	);
}
