import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import React from 'react';
import './SettingPage.scss';
import arrow from '../../assets/arrow.svg';
import profile from '../../assets/profile.svg';

interface OptionProps {
	label: string;
	data?: string;
	onClick: () => void;
	lastLine?: boolean;
}

const Option: React.FC<OptionProps> = ({ label, data, onClick, lastLine }) => (
	<>
		<div className="option" onClick={onClick}>
			<span className="label">{label}</span>
			<span className="data">{data}</span>
			<img src={arrow} alt="" className="arrowImg" />
		</div>
		{!lastLine && <hr className="option-divider" />}
	</>
);
export default function SettingPage() {
	const firstClick = () => {
		console.log('first click');
	};
	const secondClick = () => {
		console.log('second click');
	};
	return (
		<div className="all-wrapper">
			<Header type="setting" title="설정" />
			<div className="body-wrapper">
				<div className="container profile">
					<section>
						<img src={profile} alt="" />
					</section>
					<section className="privacy">
						<p>sorikikikim@test.com</p>
						<p>카카오 로그인</p>
						<button type="submit">
							로그아웃
							<img src={arrow} alt="" className="logoutArrow" />
						</button>
					</section>
				</div>
				<p className="subTitle">개인정보 설정</p>
				<div className="container">
					<Option label="성별" data="여성" onClick={firstClick} />
					<Option label="기본 위치" data="충북제천시" onClick={secondClick} lastLine={true} />
				</div>
				<p className="subTitle">설정</p>
				<div className="container">
					<Option label="시간대 별 자동 테마 변경" data="ON" onClick={firstClick} />
					<Option label="공유" data="" onClick={secondClick} />
					<Option label="언어" data="" onClick={secondClick} lastLine={true} />
				</div>
			</div>
			<Navbar page="setting" />
		</div>
	);
}
