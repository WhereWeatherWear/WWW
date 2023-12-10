import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import React from 'react';

export default function SearchPage() {
	return (
		<div className="all-wrapper">
			<Header type="search" title="위치" />
			위치페이지
			<Navbar page="location" />
		</div>
	);
}
