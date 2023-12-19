import Chatting from 'components/Chatbot/Chatting';
import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import React from 'react';

export default function ChatbotPage() {
	return (
		<div className="all-wrapper">
			<div className="header-wrapper">
				<Header type="bot" title="챗봇" />
			</div>
			<div className="body-wrapper">
				<Chatting />
			</div>
			<div className="navbar-wrapper">
				<Navbar page="home" />
			</div>
		</div>
	);
}
