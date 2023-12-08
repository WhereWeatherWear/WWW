import React from 'react';
// import Header from '../../components/Layout/Header';
import Logo from '../../assets/loginLogo.png';
import '../Login/LoginPage.scss';
import naverLogo from '../../assets/naverLogo.svg';
import kakaoLogo from '../../assets/kakaoLogo.svg';
import googleLogo from '../../assets/googleLogo.svg';

export default function LoginPage() {
	return (
		<div className="LoginPageWrapper">
			<div className="content">
				<img src={Logo} alt="" />
				<p>Where Weather Wear</p>
				<section className="btn-wrap">
					<button type="button" className="kakaoBtn">
						<img src={kakaoLogo} alt="" />
						<span>카카오 로그인</span>
					</button>
					<button type="button" className="naverBtn">
						<img src={naverLogo} alt="" />
						<span>네이버 로그인</span>
					</button>
					<button type="button" className="googleBtn">
						<img src={googleLogo} alt="" />
						<span>구글 로그인</span>
					</button>
				</section>
			</div>
			<footer>
				<p>sori & dongsu project</p>
				<p>kku304@naver.com</p>
			</footer>
		</div>
	);
}
