import React, { useState } from 'react';
import Chatbox from './Chatbox';
import './Chatting.scss';
import send from '../../assets/send.png';

interface Message {
	text: string;
	sender: 'bot' | 'person';
}

export default function Chatting() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [newMessage, setNewMessage] = useState<string>('');

	const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (newMessage.trim() !== '') {
			setMessages([...messages, { text: newMessage, sender: 'bot' }]);
			setNewMessage('');
		}
	};

	return (
		<div>
			<div className="msg-box">
				<Chatbox messages={messages} />
			</div>
			<div className="send">
				<form className="send-box" onSubmit={handleSendMessage}>
					<input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
					<button type="submit">
						<img src={send} alt="send img" />
					</button>
				</form>
			</div>
		</div>
	);
}
