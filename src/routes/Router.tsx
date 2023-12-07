import HomePage from 'pages/HomePage/HomePage';
import LocationPage from 'pages/LocationPage/LocationPage';
import SettingPage from 'pages/SettingPage/SettingPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
	return (
		<BrowserRouter>
			<div className="all-wrapper">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/location" element={<LocationPage />} />
					<Route path="/setting" element={<SettingPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}
