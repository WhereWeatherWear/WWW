import Navbar from 'components/Layout/Navbar';
import Header from 'components/Layout/Header';
import React from 'react';

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
			<Header type="button" title="추가" />
			<div className="header-wrapper">Header 자리</div>
			<div className="main-wrapper">내용물 자리</div>
			<Navbar />
		</div>
	);
}
