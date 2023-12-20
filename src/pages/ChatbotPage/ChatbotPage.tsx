import React from 'react';
import Chatting from 'components/Chatbot/Chatting';
import Header from 'components/Header/Header';

export default function ChatbotPage() {
	return (
		<div className="all-wrapper">
			<div className="header-wrapper chatbot-wrapper">
				<Header type="bot" title="챗봇" />
			</div>
			<div className="body-wrapper chatbot-wrapper">
				<Chatting />
			</div>
		</div>
	);
}
