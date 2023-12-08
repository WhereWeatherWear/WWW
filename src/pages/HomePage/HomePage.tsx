import Navbar from 'components/Layout/Navbar';
import Header from 'components/Layout/Header';
import React from 'react';
// import LoginPage from 'pages/Login/LoginPage';
import Card from 'components/Cards/Location_Card';

// interface HomePageProps {}

// function HomePage(): React.FC<HomePageProps> {

// 	return (
// 		<div className="components-wrapper">
// 			{/* <div className='header-wrapper'>Header 자리</div>
//       <div className='main-wrapper'>내용물 자리</div>
//       <div className='navbar-wrapper'>Navbar 자리</div> */}
// 			<div>Header 자리</div>
// 			<div>내용물 자리</div>
// 			<Navbar />
// 		</div>
// 	);

// }

export default function HomePage() {
	return (
		<div className="components-wrapper">
			{/* <Header type="location" title="위치" /> */}
			{/* <div className="main-wrapper">내용물 자리</div> */}
			{/* <LoginPage /> */}
			<Card />
			<Navbar />
		</div>
	);
}
