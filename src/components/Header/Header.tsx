import React from 'react';
import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import searchImg from '../../assets/search.png';
import backImg from '../../assets/backBtn.png';
import homeLogo from '../../assets/homeLogo.png';

// 제목
interface HeaderTitleProps {
	type: string;
	title?: string;
}

function HeaderTitle({ type, title }: HeaderTitleProps) {
	return type === 'bot' || type === 'location' || type === 'setting' ? (
		<div className="headerTitle">{title}</div>
	) : null;
}

// 검색
interface SearchHeaderProps {
	type: string;
}

function SearchHeader({ type }: SearchHeaderProps) {
	let content = null;

	if (type === 'location') {
		content = (
			<div className="searchBox">
				<img src={searchImg} alt="" />
				<Link to="/search">
					<input placeholder="도시 또는 주소 검색" className="searchInput location" />
				</Link>
			</div>
		);
	} else if (type === 'search') {
		content = (
			<div className="searchBox">
				<img src={searchImg} alt="" />
				<input placeholder="도시 또는 주소 검색" className="searchInput" />
			</div>
		);
	}

	return content;
}

// 버튼 헤더 컴포넌트

interface BtnHeaderProps {
	type: string;
	title?: string;
}

function BackBtn() {
	const navigate = useNavigate();

	return (
		<button type="button" className="back-btn" onClick={() => navigate(-1)}>
			<img src={backImg} alt="back btn" />
		</button>
	);
}

function BtnHeader({ type, title }: BtnHeaderProps) {
	const navigate = useNavigate();
	const isAddButton = type === 'addBtn';
	const buttonClassName = isAddButton ? 'addBtn' : 'delBtn';

	return (
		<div className="btnheader">
			<button className="backBtn" type="button" onClick={() => navigate(-1)}>
				<img src={backImg} alt="" />
				<span>취소</span>
			</button>
			<button type="button" className={buttonClassName}>
				{title}
			</button>
		</div>
	);
}

interface HeaderProps {
	type: string;
	title?: string;
}

export default function Header({ type, title }: HeaderProps) {
	switch (type) {
		case 'logo':
			return (
				<div className="headerContainer">
					<div className="logoBox">
						<img src={homeLogo} alt="" />
					</div>
				</div>
			);
		case 'bot':
			return (
				<div className="headerContainer bot-header">
					<BackBtn />
					<HeaderTitle type={type} title={title} />
				</div>
			);
		case 'location':
			return (
				<div className="headerContainer">
					<HeaderTitle type={type} title={title} />
					<div className="searchContainer">
						<SearchHeader type={type} />
					</div>
				</div>
			);
		case 'search':
			return (
				<div className="searchContainer">
					<SearchHeader type={type} />
				</div>
			);
		case 'button':
			return (
				<div className="headerContainer">
					<BtnHeader type={type} title={title} />
				</div>
			);
		case 'setting':
			return (
				<div className="headerContainer">
					<HeaderTitle type={type} title={title} />
				</div>
			);
		default:
			return null;
	}
}
