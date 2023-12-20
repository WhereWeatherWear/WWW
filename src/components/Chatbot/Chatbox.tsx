/* eslint-disable react/no-array-index-key */
import React from 'react';
import './Chatbox.scss';
import bot from '../../assets/chat-bot.svg';

interface ChatboxProps {
	messages: Message[];
}

interface Message {
	text: string;
	sender: 'bot' | 'person';
}

export default function Chatbox({ messages }: ChatboxProps) {
	return (
		<div className="chatbox-wrapper">
			{messages.map((message, index) =>
				message.sender === 'bot' ? (
					<div className="bot-chat">
						<img
							src={bot}
							alt="bot"
							style={{ width: '30px', height: '30px', border: '2px solid black', borderRadius: '50%', padding: '2px' }}
						/>
						<p key={index} className="bot-msg">
							{message.text}
						</p>
					</div>
				) : (
					<p key={index} className="person-msg">
						{message.text}
					</p>
				),
			)}
		</div>
	);
}
