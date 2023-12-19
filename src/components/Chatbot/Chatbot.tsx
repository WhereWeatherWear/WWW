import React from 'react';
import { Link } from 'react-router-dom';
import chatbot from '../../assets/chat-bot.svg';

export default function Chatbot() {
	return (
		<Link to="/chatbot">
			<p className="chat-bot">
				<img src={chatbot} alt="chatbot 이미지" />
			</p>
		</Link>
	);
}
