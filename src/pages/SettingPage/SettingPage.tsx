import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import React from 'react';

export default function SettingPage() {
	return (
		<div className="all-wrapper">
			<Header type="setting" title="설정" />
			<div className="body-wrapper">SettingPage입니다</div>
			<Navbar page="setting" />
		</div>
	);
}
