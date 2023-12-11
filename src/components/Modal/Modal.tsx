import React from 'react';
import './Modal.scss';

export default function Modal() {
	return (
		<div className="modalWrap">
			<div className="modalContainer">
				<button className="default">삭제</button>
				<button className="delete">취소</button>
			</div>
		</div>
	);
}
