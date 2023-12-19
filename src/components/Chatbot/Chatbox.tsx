/* eslint-disable react/no-array-index-key */
import React from 'react';
import './Chatbox.scss';

interface ChatboxProps {
	messages: Message[];
}

interface Message {
	text: string;
	sender: 'me' | 'other';
}

export default function Chatbox({ messages }: ChatboxProps) {
	return (
		<div className="chatbox-wrapper">
			{messages.map((message, index) =>
				message.sender === 'me' ? (
					<p key={index} className="my-msg">
						{message.text}
					</p>
				) : (
					<p key={index} className="others-msg">
						{message.text}
					</p>
				),
			)}
		</div>
	);
}
