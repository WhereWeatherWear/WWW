import Navbar from 'components/Layout/Navbar';
import React from 'react';

interface HomePageProps {}

function HomePage(): React.FC<HomePageProps> {
	return (
		<div className="components-wrapper">
			{/* <div className='header-wrapper'>Header 자리</div>
      <div className='main-wrapper'>내용물 자리</div>
      <div className='navbar-wrapper'>Navbar 자리</div> */}
			<div>Header 자리</div>
			<div>내용물 자리</div>
			<Navbar />
		</div>
	);
}
export default HomePage;
