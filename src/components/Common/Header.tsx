import React from 'react';
import 'header.scss';
import { useNavigate } from 'react-router-dom';
import searchImg from '../../assets/search.png';
import backImg from '../../assets/backBtn.png';
import homeLogo from '../../assets/homeLogo.png';

//뒤로가기
interface BackButtonProps {
	type: string;
}

function BackButton({ type }: BackButtonProps) {
	const navigate = useNavigate();

	function handleButtonClick() {
		if (type === 'cancelBtn') {
			navigate(-1);
		}
	}
	return (
		<div>
			<button className="backBtn" onClick={handleButtonClick}>
				<img src={backImg} />
				취소
			</button>
		</div>
	);
}

//제목
interface HeaderTitleProps {
	type: string;
	title: string;
}

function HeaderTitle({ type, title }: HeaderTitleProps) {
	return type === 'bot' || type === 'location' || type === 'setting' ? (
		<div className="headerTitle">{title}</div>
	) : null;
}

//검색
interface SearchHeaderProps {
	type: string;
}

function SearchHeader({ type }: SearchHeaderProps) {
	return type === 'search' ? (
		<div className="searchBox">
			<img src={searchImg} alt="" />
			<input placeholder="도시 또는 주소 검색" />
		</div>
	) : null;
}

//버튼 헤더 컴포넌트
interface BtnHeaderProps {
	type: string;
	title: string;
}
function BtnHeader({ type, title }: BtnHeaderProps) {
	return type === 'addBtn' ? (
		<div className="btnheader">
			<BackButton type="cancelBtn" />
			<button className="addBtn">{title}</button>
		</div>
	) : (
		<div className="btnheader">
			<BackButton type="cancelBtn" />
			<button className="delBtn">{title}</button>
		</div>
	);
}

interface HeaderProps {
	type: string;
	title: string;
}
export default function Header({ type, title }: HeaderProps) {
	switch (type) {
		case 'logo':
			return (
				<div>
					<img src={homeLogo} alt="" />
				</div>
			);
		case 'bot':
			return (
				<div>
					<HeaderTitle type={type} title={title} />
				</div>
			);
		case 'location':
			return (
				<div>
					<HeaderTitle type={type} title={title} />
					<SearchHeader type={type} />
				</div>
			);
		case 'search':
			return (
				<div>
					<SearchHeader type={type} />
				</div>
			);
		case 'setting':
			return (
				<div>
					<HeaderTitle type={type} title={title} />
				</div>
			);
		default:
			return null;
	}
}
