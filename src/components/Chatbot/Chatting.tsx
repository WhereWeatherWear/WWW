import React, { useState } from 'react';
import Chatbox from './Chatbox';
import './Chatting.scss';
import send from '../../assets/send.png';

interface Message {
	text: string;
	sender: 'me' | 'other';
}

export default function Chatting() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [newMessage, setNewMessage] = useState<string>('');

	const handleSendMessage = () => {
		if (newMessage.trim() !== '') {
			setMessages([...messages, { text: newMessage, sender: 'me' }]);
			setNewMessage('');
		}
	};

	return (
		<>
			<Chatbox messages={messages} />
			<div className="send-box">
				<input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
				<button type="submit" onClick={handleSendMessage}>
					<img src={send} alt="send img" />
				</button>
			</div>
		</>
	);
}
