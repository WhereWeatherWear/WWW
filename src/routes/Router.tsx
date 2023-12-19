import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatbotPage from 'pages/ChatbotPage/ChatbotPage';
import HomePage from 'pages/HomePage/HomePage';
import LocationPage from 'pages/LocationPage/LocationPage';
import LoginPage from 'pages/Login/LoginPage';
import SearchPage from 'pages/SearchPage/SearchPage';
import SettingPage from 'pages/SettingPage/SettingPage';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/location" element={<LocationPage />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="/setting" element={<SettingPage />} />
				<Route path="/chatbot" element={<ChatbotPage />} />
			</Routes>
		</BrowserRouter>
	);
}
