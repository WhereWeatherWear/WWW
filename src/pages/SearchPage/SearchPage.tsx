import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import React from 'react';

export default function SearchPage() {
	return (
		<div className="all-wrapper">
			<div className="header-wrapper">
				<Header type="search" title="위치" />
			</div>
			<div className="body-wrapper">검색페이지</div>
			<div className="navbar-wrapper">
				<Navbar page="location" />
			</div>
		</div>
	);
}
