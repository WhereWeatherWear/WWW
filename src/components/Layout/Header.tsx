import React from 'react';
import '../../styles/header.scss';
// import { useNavigate } from 'react-router-dom';
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
	return type === 'search' || type === 'location' ? (
		<div className="searchBox">
			<img src={searchImg} alt="" />
			<input placeholder="도시 또는 주소 검색" className="searchInput" />
		</div>
	) : null;
}

// 버튼 헤더 컴포넌트

interface BtnHeaderProps {
	type: string;
	title?: string;
}
function BtnHeader({ type, title }: BtnHeaderProps) {
	const isAddButton = type === 'addBtn';
	const buttonClassName = isAddButton ? 'addBtn' : 'delBtn';

	return (
		<div className="btnheader">
			<button type="button" className="backBtn">
				<img src={backImg} alt="back button" />
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
				<div className="headerContainer">
					<HeaderTitle type={type} title={title} />
				</div>
			);
		case 'location':
			return (
				<div className="headerContainer">
					<HeaderTitle type={type} title={title} />
					<SearchHeader type={type} />
				</div>
			);
		case 'search':
			return (
				<div className="headerContainer">
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
